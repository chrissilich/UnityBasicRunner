#pragma strict



function OnTriggerEnter2D(coll: Collider2D) {
	if (coll.gameObject.tag == "Player") {
		//Debug.Log("coll with player");
		
		//Destroy(gameObject, 0.2);
		
		coll.gameObject.SendMessage("boost");
		
		var cam = GameObject.FindGameObjectWithTag("MainCamera");
		cam.SendMessage("bounceIn", 0);
		cam.SendMessage("bounceOut", 1);
		cam.SendMessage("slow", 0.25);
		cam.SendMessage("normal", 1);
		
	}
}


function Start () {

}

function Update () {

}