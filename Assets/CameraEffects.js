#pragma strict

import Holoville.HOTween;
import Holoville.HOTween.Plugins; // You need this only if you plan to use some of the non-default tween plugins



private var startSize:float;


function Start() {
	startSize = camera.orthographicSize;
}

public function bounceIn (delay) {
	yield WaitForSeconds (delay);
	Debug.Log("bounceIn");
	
	var cam = GameObject.FindGameObjectWithTag("MainCamera");
	
	HOTween.To(
		cam.camera, 
		0.5, 
		new TweenParms()
			.Prop("orthographicSize", 4.5)
			.Ease(EaseType.EaseInOutBack)
	);
}



public function bounceOut (delay) {
	yield WaitForSeconds (delay);
	Debug.Log("bounceOut");
	
	var cam = GameObject.FindGameObjectWithTag("MainCamera");
	
	HOTween.To(
		cam.camera, 
		0.5, 
		new TweenParms()
			.Prop("orthographicSize", startSize)
			.Ease(EaseType.EaseInOutBack)
	);
}


public function slow(delay) {
	yield WaitForSeconds (delay);
	Debug.Log("slow");
	Time.timeScale = 0.25;
}
public function normal(delay) {
	yield WaitForSeconds (delay);
	Debug.Log("normal");
	Time.timeScale = 1;
}



