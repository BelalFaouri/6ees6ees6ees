class ForagerBee extends Bee{
constructor(age,color){
	super(age,color)
	this.age=10
	this.job=`find pollen`
	this.canFly=true
	this.treasureChest=[]



}
forage(value){
this.treasureChest.push(value)	
}

};
