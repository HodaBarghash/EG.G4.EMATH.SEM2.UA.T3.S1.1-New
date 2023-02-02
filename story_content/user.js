function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5mAyCcOqYnr":
        Script1();
        break;
  }
}

function Script1()
{
  const url="https://script.google.com/macros/s/AKfycbyjj_i0cp99H3bq536u9cTR9G7EIP6R_eppJBkGjFENH-9gEREKbTzxBnya0oXIjfM9/exec"

var player=GetPlayer()

fetch(url,{
	method:"POST",
	mode: 'no-cors',
	cache:'no-cache',
	headers: {'Content-Type': 'application/json'},
	redirect:'follow',
	body: JSON.stringify({q1attempts:player.GetVar("q1attempts"),q1answeredcorrect:player.GetVar("q1answeredcorrect")})
	}
	)
}

