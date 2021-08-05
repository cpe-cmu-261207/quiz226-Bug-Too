const author = document.querySelector("#author")
const calculation = document.querySelector("#calculation")
const btn_toggle = document.querySelector("#toggle");
const length = document.getElementById('length')
const color = document.querySelector('#color')
const search = document.getElementById('search')
const text = document.getElementById('text')
const reset = document.getElementById('reset')

// define more constants and variables here

const defcolor = "#FF0000";
const paragraph = "Hey, you're not permitted in there. It's restricted. You'll be deactivated for sure.. Don't call me a mindless philosopher, you overweight glob of grease! Now come out before somebody sees you. Secret mission? What plans? What are you talking about? I'm not getting in there! I'm going to regret this. There goes another one. Hold your fire. There are no life forms. It must have been short-circuited. That's funny, the damage doesn't look as bad from out here. Are you sure this things safe? Close up formation. You'd better let her loose. Almost there! I can't hold them! It's away! It's a hit! Negative. Negative! It didn't go in. It just impacted on the surface. Red Leader, we're right above you. Turn to point... oh-five, we'll cover for you. Stay there... I just lost my starboard engine. Get set to make your attack run. The Death Star plans are not in the main computer. Where are those transmissions you intercepted? What have you done with those plans? We intercepted no transmissions. Aaah....This is a consular ship. Were on a diplomatic mission. If this is a consular ship...were is the Ambassador? Commander, tear this ship apart until you've found those plans and bring me the Ambassador. I want her alive! There she is! Set for stun! She'll be all right. Inform Lord Vader we have a prisoner. What a piece of junk. She'll make point five beyond the speed of light. She may not look like much, but she's got it where it counts, kid. I've added some special modifications myself. We're a little rushed, so if you'll hurry aboard we'll get out of here. Hello, sir. Which way? All right, men. Load your weapons! Stop that ship! Blast 'em! Chewie, get us out of here! Oh, my. I'd forgotten how much I hate space travel. Run, Luke! Run!";
const textlen = 5;

btn_toggle.onclick = () => {
  if (btn_toggle.innerHTML === "Show Calculation") {
    calculation.innerHTML = 630610752 - (0 - length.value);
    author.innerHTML = "";
    btn_toggle.innerHTML = "Show Author";
  } else {
    calculation.innerHTML = "";
    author.innerHTML = "630610752 PURICH SEENUALLAE";
    btn_toggle.innerHTML = "Show Calculation";
  }
}

// more codes for Search and Reset buttons here

search.onclick = () => {
  let span = ""
  const splittext = paragraph.split(" ");

  for (let i = 0; i < splittext.length; i++) {
    if (splittext[i].length > length.value) {
      splittext[i] = "<span style='color:" + color.value + "'>" + splittext[i] + "</span>";
    }
  }
  for (let i = 0; i < splittext.length; i++) {
    span += splittext[i] + " ";
  }
  text.innerHTML = span;
}

reset.onclick = () => {
  text.innerHTML = paragraph;
  length.value = textlen;
  color.value = defcolor;
}