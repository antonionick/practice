let f = function (a) {
	console.log(a)
};

function throttle(func, time) {
	// cancel setTimeOut
	let timeOut;
	let isProcess = false;
	//last call function wrapper
	let last;
	// call func with this variable
	let properties;

	function wrapper() {
		//call function for setTimeOut
		let call = () => {
			func.apply(null, properties);
			isProcess = false;
		};

		//if func in process, doesn't call new
		if (isProcess) {
			last = arguments;
			if (timeOut) {
				clearTimeout(timeOut);
			}
			timeOut = setTimeout(() => {
				wrapper.apply(null, last);
			}, time);
			return;
		}

		//if func isn't in process, call
		isProcess = true;
		properties = arguments;

		//first call or not
		if (last === undefined) {
			setTimeout(call, 0);
		} else {
			setTimeout(call, time);
		}
	}

	return wrapper;
}

let f1000 = throttle(f, 1000);

f1000(1);
f1000(2);
f1000(3);

setTimeout(f1000, 1000, 4);

f1000(5);
f1000(6);
f1000(7);
f1000(8);

setTimeout(f1000, 1000, 9);