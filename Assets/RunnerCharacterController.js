#pragma strict

var startVelocity = 2;
var velocityIncrement = 0.05;
var maxVelocity = 8;
var jumpForce = 10;

private var currentSpeed:float = startVelocity;

var groundRayOffset:float = 1.48;
var groundRayHeight:float = 0.02;

function Start () {
	rigidbody2D.velocity.x = startVelocity;
}

function Update () {
	var start = transform.position;
	start.y -= groundRayOffset;
	Debug.DrawRay(start, -Vector2.up * groundRayHeight, Color.green, 0.1);
}


function FixedUpdate () {
	if (currentSpeed < maxVelocity ) {
		// if we're still under max speed, bump up the speed
		currentSpeed += velocityIncrement;
	}
	if (currentSpeed > rigidbody2D.velocity.x) {
		// if the character is not moving as fast as our desired speed, speed him up
		rigidbody2D.velocity.x = currentSpeed;
	}
	
	if (Input.GetAxis("Vertical")) {
		Debug.Log("jump");
		
		var start = transform.position;
		start.y -= groundRayOffset;
	
		var hit:RaycastHit2D = Physics2D.Raycast(start, -Vector2.up, groundRayHeight);
		
		Debug.DrawRay(start, -Vector2.up * groundRayHeight, Color.red, 1);
		
		if (hit.collider != null && hit.collider.tag == "Ground") {
			Debug.Log("hit");
			Debug.Log(hit.collider);
			rigidbody2D.velocity.y = jumpForce;
		}
	}
	
	if (transform.position.y < -1) {
		die();
	}
}

function boost() {
	Debug.Log("boost");
	rigidbody2D.velocity.y = jumpForce * 0.3;
	rigidbody2D.velocity.x = rigidbody2D.velocity.x * 5;
}

function die() {
	Debug.Log("die!");
	
	currentSpeed = startVelocity;
	
	var spawn = GameObject.FindGameObjectWithTag("Spawn");
	transform.position = spawn.transform.position;
}

