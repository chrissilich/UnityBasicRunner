#pragma strict

var startVelocity = 2;
var velocityIncrement = 0.05;
var maxVelocity = 8;
var jumpForce = 10;

private var currentSpeed:float = startVelocity;


function Start () {
	rigidbody2D.velocity.x = startVelocity;
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
	
	var start = transform.position;
	start.y -= groundRayOffset;
		
	Debug.DrawRay(start, -Vector2.up, Color.red, 1);
	var hit:RaycastHit2D = Physics2D.Raycast(start, -Vector2.up, 0.03);
	
	var grounded = false;
	if (hit.collider != null && hit.collider.tag == "Ground" /* optional */) {
		grounded = true;
	}
	
	var anim:Animator = this.GetComponent("Animator");
	if (grounded) {
		anim.SetInteger("state", 0);
	} else {
		anim.SetInteger("state", 1);
	}
	
	if (Input.GetAxis("Vertical")) {
		Debug.Log("jump");
		
		if (grounded) {
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

