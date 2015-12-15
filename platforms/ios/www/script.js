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
    var traktori = {
        amount: 0,
        power: 0.05,
        cost: 500
    };
	function refresh() {
		player.rate = worker.amount * worker.power;
    player.rate = sauna.amount * sauna.power;
    player.rate = traktori.amount * traktori.power;
    player.amount = player.amount + player.rate;

/* 		$("#amount").text(Math.round(player.amount).toString());
		$("#workerAmount").text(worker.amount.toString());
		$("#saunaAmount").text(sauna.amount.toString()); */

        document.getElementById("amount").innerHTML = Math.round(player.amount).toString();
        document.getElementById("workerAmount").innerHTML = worker.amount.toString();
        document.getElementById("saunaAmount").innerHTML = sauna.amount.toString();
        document.getElementById("traktoriAmount").innerHTML = traktori.amount.toString();
    }

$(document).ready(function() {


    document.getElementById("workerCost").innerHTML = worker.cost.toString();
	//$("#workerCost") = worker.cost.toString();
    document.getElementById("saunaCost").innerHTML = sauna.cost.toString();
    document.getElementById("traktoriCost").innerHTML = traktori.cost.toString();


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

  $("#sellWorker").click(function(){
		if (worker.amount != 0) {
            player.amount += worker.cost;
			worker.cost = Math.round(worker.cost * 0.9);
            worker.amount--;
			$("#workerCost").text(worker.cost.toString());
        }
	});

  $("#buySauna").click(function(){
		if (player.amount >= sauna.cost) {
            player.amount -= sauna.cost;
			sauna.cost = Math.round(sauna.cost * 1.1);
            sauna.amount++;
			$("#saunaCost").text(sauna.cost.toString());
        }
	});

  $("#sellSauna").click(function(){
		if (sauna.amount != 0) {
            player.amount += sauna.cost;
			sauna.cost = Math.round(sauna.cost * 0.9);
            sauna.amount--;
			$("#saunaCost").text(sauna.cost.toString());
        }
	});

  $("#buyTraktori").click(function(){
		if (player.amount >= traktori.cost) {
            player.amount -= traktori.cost;
			traktori.cost = Math.round(traktori.cost * 1.1);
            traktori.amount++;
			$("#traktoriCost").text(traktori.cost.toString());
        }
	});

  $("#sellTraktori").click(function(){
		if (traktori.amount != 0) {
            player.amount += traktori.cost;
			traktori.cost = Math.round(traktori.cost * 0.9);
            traktori.amount--;
			$("#traktoriCost").text(traktori.cost.toString());
        }
	});

  /*  function sellWorker() {
        worker.amount--;
        player.amount += worker.cost * 0.5;
    } */

    setInterval(refresh, 1);

});
