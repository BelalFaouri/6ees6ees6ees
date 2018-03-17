class RetiredForagerBee extends ForagerBee{
constructor(age,color,treasureChest){
super(age,color,treasureChest)
this.age=40
this.job='gamble';
this.canFly=false;
this.color='grey'
}
forage(){
return 'I am too old, let me play cards instead'
}
gamble(value){
	this.treasureChest.push(value)
}
};
