function printerror(Id, Msg) {
    document.getElementById(Id).innerText = Msg;
}

function formvalidation() {
    // Get values from form fields
    var name = document.form.name.value;
    var email = document.form.email.value;
    var mobile = document.form.mobile.value;
    var university = document.form.university.value;
    var course = document.form.course.value;
    var gender = document.querySelector('input[name="gender"]:checked');

    // Initialize error status
    var nameerror = emailerror = mobileerror = universityerror = courseerror = gendererror = true;

    // Validate name
    if (name == "") {
        printerror("nameerror", "Please enter your name");
        var elem = document.getElementById("name");
        elem.classList.add("input-2");
        elem.classList.remove("input-1");
    } else {
        var regex = /^[a-zA-Z\s]+$/;
        if (regex.test(name) === false) {
            printerror("nameerror", "Please enter a valid name");
            var elem = document.getElementById("name");
            elem.classList.add("input-2");
            elem.classList.remove("input-1");
        } else {
            printerror("nameerror", "");
            nameerror = false;
            var elem = document.getElementById("name");
            elem.classList.add("input-1");
            elem.classList.remove("input-2");
        }
    }

    // Validate email
    if (email == "") {
        printerror("emailerror", "Please enter your email");
        var elem = document.getElementById("email");
        elem.classList.add("input-2");
        elem.classList.remove("input-1");
    } else {
        var regex = /^\S+@\S+\.\S+$/;
        if (regex.test(email) === false) {
            printerror("emailerror", "Please enter a valid email");
            var elem = document.getElementById("email");
            elem.classList.add("input-2");
            elem.classList.remove("input-1");
        } else {
            printerror("emailerror", "");
            emailerror = false;
            var elem = document.getElementById("email");
            elem.classList.add("input-1");
            elem.classList.remove("input-2");
        }
    }

    // Validate mobile
    if (mobile == "") {
        printerror("mobileerror", "Please enter your mobile number");
        var elem = document.getElementById("mobile");
        elem.classList.add("input-2");
        elem.classList.remove("input-1");
    } else {
        var regex = /^\d{10}$/;
        if (regex.test(mobile) === false) {
            printerror("mobileerror", "Please enter a valid mobile number");
            var elem = document.getElementById("mobile");
            elem.classList.add("input-2");
            elem.classList.remove("input-1");
        } else {
            printerror("mobileerror", "");
            mobileerror = false;
            var elem = document.getElementById("mobile");
            elem.classList.add("input-1");
            elem.classList.remove("input-2");
        }
    }

    // Validate university
    if (university == "Select") {
        printerror("universityerror", "Please select your university");
        var elem = document.getElementById("university");
        elem.classList.add("input-4");
        elem.classList.remove("input-3");
    } else {
        printerror("universityerror", "");
        universityerror = false;
        var elem = document.getElementById("university");
        elem.classList.add("input-3");
        elem.classList.remove("input-4");
    }

    // Validate course
    if (course == "") {
        printerror("courseerror", "Please enter your course");
        var elem = document.getElementById("course");
        elem.classList.add("input-2");
        elem.classList.remove("input-1");
    } else {
        var regex = /^[a-zA-Z\s]+$/;
        if (regex.test(course) === false) {
            printerror("courseerror", "Please enter a valid course");
            var elem = document.getElementById("course");
            elem.classList.add("input-2");
            elem.classList.remove("input-1");
        } else {
            printerror("courseerror", "");
            courseerror = false;
            var elem = document.getElementById("course");
            elem.classList.add("input-1");
            elem.classList.remove("input-2");
        }
    }

    // Validate gender
    if (gender == null) {
        printerror("gendererror", "Please select your gender");
        var elem = document.getElementById("gender");
        elem.classList.add("input-4");
        elem.classList.remove("input-3");
    } else {
        printerror("gendererror", "");
        gendererror = false;
        var elem = document.getElementById("gender");
        elem.classList.add("input-3");
        elem.classList.remove("input-4");
    }

    // Prevent form submission if there are errors
    if ((nameerror || emailerror || mobileerror || universityerror || courseerror || gendererror) == true) {
        return false;
    } else {
        return true;
    }
}
