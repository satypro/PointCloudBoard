$(document).ready(function()
			{
				$("#LoanExtraPointCloud").on('change', function(e)
				{
					if (pclData.length > particles.geometry.drawRange.count)
					{
						particles.geometry.setDrawRange( 0, pclData.length);

						var positions = particles.geometry.attributes.position.array;
						var colors = particles.geometry.attributes.color.array;

						var currentPoints = Math.floor(totalPoints);
						totalPoints = pclData.length;

						for(i = currentPoints; i < totalPoints; i++)
						{
							positions[i * 3] =  pclData[i][0] * 50;
							positions[i * 3 + 1] =  pclData[i][1] * 50;
							positions[i * 3 + 2] =  pclData[i][2] * 50;

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
			});