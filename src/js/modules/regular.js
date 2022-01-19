let emaiInput = document.getElementById('formInput');
 function email_test(input) {
     console.log(input.value)
	return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
}
