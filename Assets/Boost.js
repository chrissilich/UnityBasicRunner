#pragma strict



function OnCollisionEnter2D(coll: Collision2D) {
	Debug.Log("coll");
	if (coll.gameObject.tag == "Player") {
		//coll.gameObject.SendMessage("ApplyDamage", 10);
		Debug.Log("coll with player");
		var cam = GameObject.FindGameObjectWithTag("MainCamera");
		var cameraEffectsScript:CameraEffects = cam.GetComponent(typeof(CameraEffects));
		cameraEffectsScript.bounce();
	}
}


function Start () {

}

function Update () {

}