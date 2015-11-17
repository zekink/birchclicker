    var player = {
        amount: 0,
        rate: 0
    };
    var worker = {
        amount: 0,
        power: 0.002,
        cost: 15
    };
    var sauna = {
        amount: 0,
        power: 0.03,
        cost: 200
    };
	function refresh() {
		player.rate = worker.amount * worker.power;
        player.amount = player.amount + player.rate;
		
/* 		$("#amount").text(Math.round(player.amount).toString());
		$("#workerAmount").text(worker.amount.toString());
		$("#saunaAmount").text(sauna.amount.toString()); */
		
        document.getElementById("amount").innerHTML = Math.round(player.amount).toString();
        document.getElementById("workerAmount").innerHTML = worker.amount.toString();
        document.getElementById("saunaAmount").innerHTML = sauna.amount.toString();
    }

$(document).ready(function() {
    
	
    document.getElementById("workerCost").innerHTML = worker.cost.toString();
	//$("#workerCost") = worker.cost.toString();
    document.getElementById("saunaCost").innerHTML = sauna.cost.toString();


	$("#birch").click(function(){
		player.amount += 1;
	});
	$("#buyWorker").click(function(){
		if (player.amount >= worker.cost) {
            player.amount -= worker.cost;
			worker.cost = Math.round(worker.cost * 1.1);
            worker.amount++;
			$("#workerCost").text(worker.cost.toString());
        }
	});
	
    function sellWorker() {
        worker.amount--;
        player.amount += worker.cost * 0.5;
    }
	
    setInterval(refresh, 1);
	
});




