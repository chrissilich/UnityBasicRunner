#pragma strict

var startVelocity = 2;
var velocityIncrement = 0.05;
var maxVelocity = 8;
var jumpForce = 10;

private var currentSpeed:float = startVelocity;

var groundRayOffset:float = 1.1;


function Start () {
	rigidbody2D.velocity.x = startVelocity;
}



function FixedUpdate () {
	if (currentSpeed < maxVelocity) {
		currentSpeed += velocityIncrement;
	}
	rigidbody2D.velocity.x = currentSpeed;
	
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
			//rigidbody2D.AddForce(Vector2.up * jumpForce);
			rigidbody2D.velocity.y = jumpForce;
		}
	}
	
	if (transform.position.y < -1) {
		die();
	}
}

function die() {
	Debug.Log("die!");
	
	currentSpeed = startVelocity;
	
	var spawn = GameObject.FindGameObjectWithTag("Spawn");
	transform.position = spawn.transform.position;
}

