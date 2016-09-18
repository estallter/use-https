var content1 = 'This is a connection between a user and a wifi network, with which ' +
'he/she is accessing a website.';

var content2 = 'Let\'s say you are the user. All information you send and receive with the website is transmitted ' +
'in "packets"';

var content3 = 'Unfortunately, with the right tools, anyone on the same network, ' +
'perhaps some malicious hacker, can see the content of these packets.';

var content4 = 'On unsecured connections to a website, someone can take a peek at ' +
'your login session cookies to a website and copy it. Using this cookie, they can put it into ' +
'their browser to use a website on your account without ever having to log in.';

var content5 = 'Another risk is that if you are submitting or receiving sensitive data ' +
'like credit card info, social security numbers, or personal info, this information ' +
'can very easily be looked at.'

var content6 = 'Experienced hackers can also exploit your network in such a way that ' +
'their computer will learn how to pretend to be the wifi router, and also pretend to ' +
'be your computer. The hacker can then force your wifi connection to cut out, but ' +
'when your computer tries to reestablish connection, it instead connects to the hacker\'s ' +
'device disguised as your original wifi network. The hacker\'s device then poses as ' +
'your computer to the network.';

var content7 = 'Now, when you try to connect to the internet, all your traffic is ' +
'actually going to the hacker\'s computer. Usually, the hacker will then let your ' +
'traffic go through as normal to where it wants to go. When it reaches the ' +
'desired website, the website will send it\'s response through the same route: the ' +
'hacker\'s device. This is commonly referred to as a Man in the Middle attack.';

var content8 = 'The hacker can see all of your internet traffic, pretend to ' +
'be your computer, or even alter packets before they are transmitted to the other side. ' +
'This often happens without you ever realizing you are compromised. Imagine you are ' +
'arranging to tranfer money to someone\'s bank account; they send you their account info, ' +
'but before it gets to you the hacker replaces it with their own account info. ';

var content9 = 'All these security risks are scary, but how can we prevent them? ' +
'HTTPS is a protocol for communicating with web servers when your ' +
'traffic may be monitored. (Nearly all the time.) First, when requesting to connect ' +
'to a website, your computer and the server go through a Diffie–Hellman key exchange.';

var content10 = 'This is a special method of exchanging encryption keys that prevents ' +
'anyone who sees your traffic in the middle of transmission from being able to also ' +
'get the key.';

var content11 = 'Once these encryption keys are exhanged between you and the server, ' +
'you can freely send and receive encrypted information that will not be readable by ' +
'anyone sniffing your packets, even if they have made themself a Man in the Middle.';

var content12 = 'Most websites these days are well aware of the security problems with HTTP, ' +
'and usually make HTTPS the default method of communication. However, older websites ' +
'may not have adopted modern security standards and still use HTTP. Many browsers ' +
'will also warn you when you are on an HTTP connection.';

var content13 = 'In conclusion: always use HTTPS when transmitting sensitive information ' +
'online. If you have no choice but to use an HTTP website, think twice about using ' +
'the same email or password that you use for other sites.';

function updateContent(state) {

  switch(state) {
    case 2:
      $('#info p').html(content2);
      $('#packet').css('visibility', 'visible');
      break;
    case 3:
      $('#info p').html(content3);
      $('#hacker').css('visibility', 'visible');
      $('#hacker-label').css('visibility', 'visible');
      $('#hacker-router').css('visibility', 'visible');
      $('#magnifying').css('visibility', 'visible');
      break;
    case 4:
      $('#info p').html(content4);
      $('#packet').html('<img id="cookie" src="./cookie.png">')
      $('#cookie_copy').css('visibility', 'visible');
      $('#cookie_copy').css('animation-name', 'cookie');
      break;
    case 5:
      $('#info p').html(content5);
      $('#cookie_copy').css('visibility', 'hidden');
      $('#packet img').css('visibility', 'hidden');
      $('#magnifying').css('visibility', 'hidden');
      break;
    case 6:
      $('#info p').html(content6);
      $('#packet').css('visibility', 'hidden');
      $('#x').css('animation-name', 'x');
      $('#victim-router').css('animation-name', 'fade');
      $('#victim-hacker').css('animation-name', 'fade');
      break;
    case 7:
      $('#info p').html(content7);
      $('#packet2').css('visibility', 'visible')
      break;
    case 8:
      $('#info p').html(content8);
      $('#packet2').css('visibility', 'hidden');
      $('#packet3').css('animation-name', 'packet2, packet-colors');
      break;
    case 9:
      $('#info p').html(content9);
      $('#packet3').css('visibility', 'hidden');
      break;
    case 10:
      $('#info p').html(content10);
      $('#key-exchange').css('animation-name', 'packet2').css('visibility', 'visible');
      $('#key1, #key2').css('opacity', '1');
      break;
    case 11:
      $('#info p').html(content11);
      $('#packet2').css('visibility', 'visible').html('<img id="red_lock" src="red_lock.png">');
      // update button too
      break;
    case 12:
      $('#info p').html(content12);
      break;
    case 13:
      $('#info p').html(content13);
  }

}

$(document).ready(function() {
  var current_state = 1;
  $('#info p').html(content1);

  $('#next').on('click', function() {
    updateContent(++current_state);
  });

  /** signal animation
  var i = 1;
  //start with all boxes invisible
  var selector = "#hacker-router .signal";
  $(selector).css('visibility', 'hidden');

  window.setInterval(function () {
    //////////////////change these objects
    var child_i = $(selector + ":nth-child(" + i + ")" );
    var last_child = $(selector + ":last-child")
    var child_i_minus_1 = $(selector + ":nth-child(" + (i-1) + ")")
    //////////////////don't change anything below this line
    if(i - 1 < 1){
      last_child.css("visibility", "hidden");
    } else {
      child_i_minus_1.css("visibility", "hidden");
    }
    child_i.css("visibility", "visible");
    if(child_i.is(":last-child")){
      i = 1;
    } else {
      i++;
    }
  },450); */



});
