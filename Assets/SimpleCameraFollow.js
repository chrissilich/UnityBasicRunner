#pragma strict

var who:GameObject;
var followOnXAxis:boolean = true;
var followOnYAxis:boolean = false;

function Start () {

}

function Update () {
	if (followOnXAxis) transform.position.x = who.transform.position.x;
	if (followOnYAxis) transform.position.y = who.transform.position.y;
}