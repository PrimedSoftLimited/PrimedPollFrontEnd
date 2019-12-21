$(document).ready(function () {
  var token = localStorage.getItem('token');
  var interests = [];
  $(document).on('click', '.cat_data', function () {
    var cat_id = $(this).data('getinterestid');
    var check_exist = jQuery.inArray(cat_id, interests);
    if (check_exist != -1) {
      interests.splice(check_exist, 1);
      $("#interest" + cat_id).css('background', '#f55330');
      $("#interest" + cat_id).css('border-top', '1px solid #f55330');
      $("#check" + cat_id).hide();
    } else {
      interests.push(cat_id);
      $("#interest" + cat_id).css('background', 'inherit');
      $("#interest" + cat_id).css('border-top', '1px solid #f55330');
      $("#check" + cat_id).show();
    }
    if (interests.length == 0) {
      $("#show_total_interest").hide();
    } else {
      $("#show_total_interest").show();
      $("#show_total_interest").html(interests.length);
    }
    if (interests.length >= 5) {
      $(".juni_interest_info").hide();
      $(".juni_interest_submit").show();
    } else {
      $(".juni_interest_info").show();
      $(".juni_interest_submit").hide();
    }
  });

  $("#proceed").on('click', function (e) {
    e.preventDefault();
    $(".se-pre").show();

    var firstName = $("#firstName").val();
    var lastName = $("#lastName").val();
    var countryCode = $("#countryCode").val();
    var phoneNumber = $("#phoneNumber").val();
    var dob = $("#dob").val();
    var gender = $("#gender").val();
    var country = $("#country").val();

    $(".err_signup").html('');
    $("#firstName, #lastname, #country, #phoneNumber, #dob, #gender").removeClass('err_signup_input');
    if (firstName == "") {
      $("#juni_err_firstName").html('fisrtname cannot be empty');
      $("#firstName").addClass('err_signup_input');
      $(".se-pre").hide();
      return false;
    } else if (lastName == "") {
      $("#juni_err_lastName").html('lastname cannot be empty');
      $("#lastname").addClass('err_signup_input');
      $(".se-pre").hide();
      return false;
    }  else if (country == "") {
      $("#juni_err_country").html('Country is required');
      $("#country").addClass('err_signup_input');
      $(".se-pre").hide();
      return false;
    } else if (phoneNumber == "") {
      $("#juni_err_phoneNumber").html('PhoneNumber cannot be empty');
      $("#phoneNumber").addClass('err_signup_input');
      $(".se-pre").hide();
      return false;
    } else if (dob == "") {
      $("#juni_err_dob").html('Date of birth is required');
      $("#dob").addClass('err_signup_input');
      $(".se-pre").hide();
      return false;
    } else if (gender == "") {
      $("#juni_err_gender").html('Gender is required');
      $("#gender").addClass('err_signup_input');
      $(".se-pre").hide();
      return false;
    }else {

      interests_data = interests.map(function (x) {
        return {
          "interest_id": x
        }
      });
      console.log(interests_data);
      var settings = {
        "url": `${baseUrl}api/complete/registration`,
        "method": "PUT",
        "timeout": 0,
        "headers": {
          "Authorization": "Bearer " + token,
          "Content-Type": "application/x-www-form-urlencoded"
        },
        "data": {
          "first_name": firstName,
          "last_name": lastName,
          "phone": countryCode + phoneNumber,
          "dob": dob,
          "country": country,
          "gender": gender,
          "interest_ids": interests_data
        },
      };
      console.log(settings)
      $.ajax(settings).done(function (response) {
        if (response) {
          $(".se-pre").hide();
          const user = response.user;
          let wrapImage = response.image_link + user.image;

          localStorage.setItem('user_id', user.id);
          localStorage.setItem('user_firstname', user.first_name);
          localStorage.setItem('user_lastname', user.last_name);
          localStorage.setItem('user_email', user.email);
          localStorage.setItem('user_image', wrapImage);
          localStorage.setItem('user_dob', user.dob);
          localStorage.setItem('user_gender', user.gender);
          localStorage.setItem('user_country', user.country);
          localStorage.setItem('user_phone', user.phone);
          localStorage.setItem('bio', user.bio);
          localStorage.setItem('username', user.username);
          location.replace("../user/feeds.html");

          location.replace("../user/feeds.html");
        }
      }).fail(function (err) {
        console.log(err)
        if (err) {
          $(".se-pre").hide();
          if (err.status === 422) {
            if (err.responseJSON.first_name) {
              $("#juni_err_firstName").html(err.responseJSON.first_name[0]);
              $("#firstName").addClass('err_signup_input');
            }
            if (err.responseJSON.last_name) {
              $("#juni_err_lastName").html(err.responseJSON.last_name[0]);
              $("#lastName").addClass('err_signup_input');
            }
            if (err.responseJSON.phone) {
              $("#juni_err_phoneNumber").html(err.responseJSON.phone[0]);
              $("#phoneNumber").addClass('err_signup_input');
            }
            if (err.responseJSON.dob) {
              $("#juni_err_dob").html(err.responseJSON.dob[0]);
              $("#dob").addClass('err_signup_input');
            }
            if (err.responseJSON.gender) {
              $("#juni_err_gender").html(err.responseJSON.dob[0]);
              $("#gender").addClass('err_signup_input');
            }
            if (err.responseJSON.country) {
              $("#juni_err_country").html(err.responseJSON.dob[0]);
              $("#gender").addClass('err_signup_input');
            }

          }
        }

      });
    }
  });
});