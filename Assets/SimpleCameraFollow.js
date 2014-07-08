#pragma strict

var who:GameObject;
var followOnXAxis:boolean = true;
var followOnYAxis:boolean = false;

private var onHold:boolean = false;

function Start () {

}

function Update () {
	if (!onHold && followOnXAxis) transform.position.x = who.transform.position.x;
	if (!onHold && followOnYAxis) transform.position.y = who.transform.position.y;
}
