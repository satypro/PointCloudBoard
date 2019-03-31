

			if ( WEBGL.isWebGLAvailable() === false ) 
			{
				document.body.appendChild( WEBGL.getWebGLErrorMessage() );
			}

			var camera, 
				controls, 
				scene, 
				renderer, 
				stats,
				geometry,
				particles,
				totalPoints;

			init();
			animate();

			function init() 
			{
				var canvasContainer = document.getElementById( 'canvas-container' );
				// renderer
				var width = canvasContainer.offsetWidth - 20;
				var height = window.innerHeight - 20; //canvasContainer.offsetHeight;

				camera = new THREE.PerspectiveCamera( 100, width / height, 1, 2000 );
				camera.position.z = 100;
				camera.position.x = 0;
				camera.position.y = 0;
				
				controls = new THREE.TrackballControls(camera, canvasContainer);
				controls.rotateSpeed = 2.0;
				controls.zoomSpeed = 1.2;
				controls.panSpeed = 0.6;
				controls.noZoom = false;
				controls.noPan = false;
				controls.staticMoving = false;
				controls.dynamicDampingFactor = 0.3;
				controls.keys = [ 65, 83, 68 ];
				controls.addEventListener( 'change', render );

				var MAX_POINTS = 1500000;
				geometry = new THREE.BufferGeometry(); 
				var positions = new Float32Array( MAX_POINTS * 3 ); // 3 vertices per point
				var colors = new Float32Array( MAX_POINTS * 3 ); // 3 vertices per point
				geometry.addAttribute( 'position', new THREE.BufferAttribute( positions, 3 ) );
				geometry.addAttribute( 'color', new THREE.BufferAttribute( colors, 3 ) );
				geometry.setDrawRange( 0,  Math.ceil(pclData.length/2) );
				
				var materials = new THREE
					.PointCloudMaterial( 
						{ 
							size: 0.02, 
							vertexColors: THREE.VertexColors 
					});

				particles = new THREE
					.PointCloud(geometry, materials);
				// Experiment to put pivot and set the position of the point cloud rendering 
				particles.position.set(-80, -40, 0);
				particles.rotation.set(0, 0, 0);

				// world
				scene = new THREE.Scene();
				scene.background = new THREE.Color(0xffffff);
				scene.fog = new THREE.FogExp2( 0xcccccc, 0.002 );
				scene.add(particles);	

				var positions = particles.geometry.attributes.position.array;
				var colors = particles.geometry.attributes.color.array;

				//totalPoints = Math.floor(pclData.length/2);
				totalPoints = pclData.length;	
                for (i = 0; i < totalPoints; i++) 
                {
					positions[i * 3] =  pclData[i][0] * 50;
					positions[i * 3 + 1] =  pclData[i][1] * 50;
					positions[i * 3 + 2] =  pclData[i][2] * 50;

					colors[i * 3 ] = 0;
					colors[i * 3 + 1 ] = 0;
					colors[i * 3 + 2 ] = 0;
				}
				
				renderer = new THREE.WebGLRenderer( { antialias: true } );
				renderer.setPixelRatio(1);
				renderer.setSize(width, height);
				
				canvasContainer.appendChild( renderer.domElement );

				window.addEventListener( 'resize', onWindowResize, false );
				render();
			}

			function onWindowResize() 
			{
				camera.aspect = window.innerWidth / window.innerHeight;
				camera.updateProjectionMatrix();
				renderer.setSize( window.innerWidth, window.innerHeight );
				controls.handleResize();
				render();
			}

			function animate() 
			{
				requestAnimationFrame( animate );	
				controls.update();
				//stats.update();
			}

			function render() 
			{
				renderer.render( scene, camera );
			}