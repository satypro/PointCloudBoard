$(document).ready(function()
			{
				$("#pointType").on('change', function(e)
				{
					var val = $('#pointType').val();

					if (val == 2)
					{
						var sprite = new THREE.TextureLoader().load('textures/sprites/disc.png');
						particles.material.map = sprite;
						//particles.material.color.setHSL( 1.0, 0.3, 0.7 );
						particles.material.needsUpdate = true;
						particles.material.alphaTest = 0.09;
						//particles.material.transparent = true;
					}
					if (val == 1)
					{
						particles.material.map = null;
						particles.material.needsUpdate = true;
					}

					render();
				});
				$("#LoanExtraPointCloud").on('change', function(e)
				{
					if (cloudPoints.length > particles.geometry.drawRange.count)
					{
						particles.geometry.setDrawRange( 0, cloudPoints.length);

						var positions = particles.geometry.attributes.position.array;
						var colors = particles.geometry.attributes.color.array;

						var currentPoints = Math.floor(totalPoints);
						totalPoints = cloudPoints.length;

						for(i = currentPoints; i < totalPoints; i++)
						{
							positions[i * 3] =  cloudPoints[i][0] * 50;
							positions[i * 3 + 1] =  cloudPoints[i][1] * 50;
							positions[i * 3 + 2] =  cloudPoints[i][2] * 50;

							colors[i * 3] = 255;
							colors[i * 3 + 1 ] = 0;
							colors[i * 3 + 2 ] = 0;
						}

						particles.geometry.attributes.position.needsUpdate = true;
						particles.geometry.attributes.color.needsUpdate = true;

						render();
					}
				});

				$("#semanticClassification").on('change', function(e)
				{
					var val = $('#semanticClassification').val();
					var semanticMap = GetSemanticColorMap(parseInt(val));
					colors = particles.geometry.attributes.color.array;
					for (i = 0; i < totalPoints; i++) 
					{
						if (semanticMap.Code == semantic[i])
						{
							colors[i * 3 ] = semanticMap.R;
							colors[i * 3 + 1] = semanticMap.G;
							colors[i * 3 + 2] = semanticMap.B;
						}
						else
						{
							colors[i * 3] = 255;
							colors[i * 3 + 1] = 255;
							colors[i * 3 + 2] = 0;
						}
					}

					particles.geometry.attributes.color.needsUpdate = true;

					render();
				});

				$("#geomteryClassification").on('change', function(e)
				{
					var val = $('#geomteryClassification').val();
					var pointClass = GetGeometryColorMap(parseInt(val));
					colors = particles.geometry.attributes.color.array;
					for (i = 0; i < totalPoints; i++) 
					{
						if (pointClass.Code == pointclass[i])
						{
							colors[i * 3 ] = pointClass.R;
							colors[i * 3 + 1] = pointClass.G;
							colors[i * 3 + 2] = pointClass.B;
						}
						else
						{
							colors[i * 3] = 255;
							colors[i * 3 + 1] = 255;
							colors[i * 3 + 2] = 0;
						}
					}

					
					particles.geometry.attributes.color.needsUpdate = true;

					render();
				});
				
				$("#pointSize").change(function()
				{	
					var val = $('#pointSize').val();
					$('#pointSizeValue').text(val);
					particles.material.size = val;
					render();
				});

				$("#pointBudget").change(function()
				{	
					var val = $('#pointBudget').val();
					$('#pointBudgetValue').text(val);
					render();
				});
				
                loadCloud();
			});