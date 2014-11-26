$(function(){

	function runScripts(){

		var setup = {

			init: function(){

				for(var funcs in readyFunctions) {

					try {

						readyFunctions[funcs]();

					} catch(error) {

						console.group('[Hey noob, you broke '+funcs+'... look below] - ' + error['message']);
						console.info(error['stack'].split('\n')[1]);
						console.groupEnd();

					}

				}

			}

		}

		setup.init();

	}
	
	window.readyFunctions  = {


		method1: function() {

			console.log('ready functions ready');

		},

		method2: function() {

		}

	}
	//ready

	runScripts();

});