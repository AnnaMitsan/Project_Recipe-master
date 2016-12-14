var TastesArray= [];

var storage = require("./storage");

var StorageTastesArray = storage.get("tastes");

if(StorageTastesArray){
  
    TastesArray = StorageTastesArray;
    
    initialiseCheckboxes();
} else {
    TastesArray= [{taste: "meat", check: 0},{taste: "milk", check: 0},{taste: "cheese", check: 0},
                 {taste: "butter", check: 0 },{taste: "eggs", check: 0},{taste: "flour", check: 0},
                 {taste: "sugar", check: 0 },{taste: "salt", check: 0},{taste: "soda", check: 0},
                 {taste: "cornstarch", check: 0 },{taste: "cinnamon", check: 0},{taste: "oats", check: 0},
                 {taste: "nuts", check: 0 }];
    initialiseCheckboxes();
}
    
    


function initialiseCheckboxes(){
    TastesArray.forEach(function(item) {
       
        if ("meat" == item.taste){
            if(item.check==1){
                $("#meat").attr('checked', 'checked');
            } 
        }

        if ("milk" == item.taste){
            if(item.check==1){
                $("#milk").attr('checked', 'checked');
            } 
        }
        
        if ("cheese" == item.taste){
            if(item.check==1){
                $("#cheese").attr('checked', 'checked');
            } 
        }
        
        if ("butter" == item.taste){
            if(item.check==1){
                $("#butter").attr('checked', 'checked');
            } 
        }
        
        if ("eggs" == item.taste){
            if(item.check==1){
                $("#eggs").attr('checked', 'checked');
            } 
        }
        
         if ("flour" == item.taste){
            if(item.check==1){
                $("#flour").attr('checked', 'checked');
            } 
        }
        
         if ("sugar" == item.taste){
            if(item.check==1){
                $("#sugar").attr('checked', 'checked');
            } 
        }
        
         if ("salt" == item.taste){
            if(item.check==1){
                $("#salt").attr('checked', 'checked');
            } 
        }
        
         if ("soda" == item.taste){
            if(item.check==1){
                $("#soda").attr('checked', 'checked');
            } 
        }
        
         if ("cornstarch" == item.taste){
            if(item.check==1){
                $("#cornstarch").attr('checked', 'checked');
            } 
        }
        
         if ("cinnamon" == item.taste){
            if(item.check==1){
                $("#cinnamon").attr('checked', 'checked');
            } 
        }
        
         if ("oats" == item.taste){
            if(item.check==1){
                $("#oats").attr('checked', 'checked');
            } 
        }
        
         if ("nuts" == item.taste){
            if(item.check==1){
                $("#nuts").attr('checked', 'checked');
            } 
        }
        
	});
  
}


$("#meat").click(function() {
	var id = -1;
	TastesArray.forEach(function(item) {
		if ("meat" == item.taste) id = TastesArray.indexOf(item);
	});
	if ($(this).is(':checked')) {
     //   console.log("meat before check " + TastesArray[id].check);
		TastesArray[id].check = 1;
      //  console.log("meat after check " + TastesArray[id].check);
	} else {
    //    console.log("meat before uncheck " + TastesArray[id].check);
		TastesArray[id].check = 0;
    //    console.log("meat after uncheck " + TastesArray[id].check);
	}  
    storage.set("tastes", TastesArray); 
  //  console.log("tastes "+TastesArray[id].taste +" "+TastesArray[id].check);
  //  console.log("storage "+ StorageTastesArray[id].taste +" "+StorageTastesArray[id].check);
});

$("#milk").click(function() {
	var id = -1;
	TastesArray.forEach(function(item) {
		if ("milk" == item.taste) id = TastesArray.indexOf(item);
	});
	if ($(this).is(':checked')) {
     //   console.log("milk before check " + TastesArray[id].check);
		TastesArray[id].check = 1;
      //  console.log("milk after check " + TastesArray[id].check);
	} else {
	//	console.log("milk before uncheck " + TastesArray[id].check);
		TastesArray[id].check = 0;
     //   console.log("milk after uncheck " + TastesArray[id].check);
	}  
    storage.set("tastes", TastesArray); 
  //  console.log("tastes "+ TastesArray[id].taste +" "+TastesArray[id].check);
   //  console.log("storage "+ StorageTastesArray[id].taste +" "+StorageTastesArray[id].check);
});

$("#cheese").click(function() {
	var id = -1;
	TastesArray.forEach(function(item) {
		if ("cheese" == item.taste) id = TastesArray.indexOf(item);
	});
	if ($(this).is(':checked')) {
		TastesArray[id].check = 1;
	} else {
		TastesArray[id].check = 0;
	}
    storage.set("tastes", TastesArray); 
});

$("#butter").click(function() {
	var id = -1;
	TastesArray.forEach(function(item) {
		if ("butter" == item.taste) id = TastesArray.indexOf(item);
	});
	if ($(this).is(':checked')) {
		TastesArray[id].check = 1;
	} else {
		TastesArray[id].check = 0;
	}
    storage.set("tastes", TastesArray); 
});

$("#eggs").click(function() {
	var id = -1;
	TastesArray.forEach(function(item) {
		if ("eggs" == item.taste) id = TastesArray.indexOf(item);
	});
	if ($(this).is(':checked')) {
		TastesArray[id].check = 1;
	} else {
		TastesArray[id].check = 0;
	}
    storage.set("tastes", TastesArray); 
});

$("#flour").click(function() {
	var id = -1;
	TastesArray.forEach(function(item) {
		if ("flour" == item.taste) id = TastesArray.indexOf(item);
	});
	if ($(this).is(':checked')) {
		TastesArray[id].check = 1;
	} else {
		TastesArray[id].check = 0;
	}
    storage.set("tastes", TastesArray); 
});

$("#sugar").click(function() {
	var id = -1;
	TastesArray.forEach(function(item) {
		if ("sugar" == item.taste) id = TastesArray.indexOf(item);
	});
	if ($(this).is(':checked')) {
		TastesArray[id].check = 1;
	} else {
		TastesArray[id].check = 0;
	}
    storage.set("tastes", TastesArray); 
});

$("#salt").click(function() {
	var id = -1;
	TastesArray.forEach(function(item) {
		if ("salt" == item.taste) id = TastesArray.indexOf(item);
	});
	if ($(this).is(':checked')) {
		TastesArray[id].check = 1;
	} else {
		TastesArray[id].check = 0;
	}
    storage.set("tastes", TastesArray); 
});

$("#soda").click(function() {
    	var id = -1;
	TastesArray.forEach(function(item) {
		if ("soda" == item.taste) id = TastesArray.indexOf(item);
	});
	if ($(this).is(':checked')) {
		TastesArray[id].check = 1;
	} else {
		TastesArray[id].check = 0;
	}
    storage.set("tastes", TastesArray); 
});

$("#cornstarch").click(function() {
    	var id = -1;
	TastesArray.forEach(function(item) {
		if ("cornstarch" == item.taste) id = TastesArray.indexOf(item);
	});
	if ($(this).is(':checked')) {
		TastesArray[id].check = 1;
	} else {
		TastesArray[id].check = 0;
	}
    storage.set("tastes", TastesArray); 
});

$("#cinnamon").click(function() {
	var id = -1;
	TastesArray.forEach(function(item) {
		if ("cinnamon" == item.taste) id = TastesArray.indexOf(item);
	});
	if ($(this).is(':checked')) {
		TastesArray[id].check = 1;
	} else {
		TastesArray[id].check = 0;
	}
    storage.set("tastes", TastesArray); 
});

$("#oats").click(function() {
	var id = -1;
	TastesArray.forEach(function(item) {
		if ("oats" == item.taste) id = TastesArray.indexOf(item);
	});
	if ($(this).is(':checked')) {
		TastesArray[id].check = 1;
	} else {
		TastesArray[id].check = 0;
	}
    storage.set("tastes", TastesArray); 
});

$("#nuts").click(function() {
	var id = -1;
	TastesArray.forEach(function(item) {
		if ("nuts" == item.taste) id = TastesArray.indexOf(item);
	});
	if ($(this).is(':checked')) {
		TastesArray[id].check = 1;
	} else {
		TastesArray[id].check = 0;
	}
    storage.set("tastes", TastesArray); 
    
});

function updateTastes(){
    var $node = $("#tastes").html();  
    $("#tastes").html("");
    $("#tastes").append($node);
    
  //  initialiseCheckboxes(TastesArray);  
}


$("#clear_tastes").click(clearTastes());

function clearTastes(){
    TastesArray= [{taste: "meat", check: 0},{taste: "milk", check: 0},{taste: "cheese", check: 0},
                 {taste: "butter", check: 0 },{taste: "eggs", check: 0},{taste: "flour", check: 0},
                 {taste: "sugar", check: 0 },{taste: "salt", check: 0},{taste: "soda", check: 0},
                 {taste: "cornstarch", check: 0 },{taste: "cinnamon", check: 0},{taste: "oats", check: 0},
                 {taste: "nuts", check: 0 }];
    storage.clear;
}
