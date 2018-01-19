var data = [
{
	"name":"Apple-iPhone-4",
	"type":"phone",
	"price":"90000",
	"imageUrl":"/ShopOn/assets/images/01.jpg"
},
{
	"name":"Apple-iPhone-4S",
	"type":"phone",
	"price":"80000",
	"imageUrl":"/ShopOn/assets/images/02.jpg"
},
{
	"name":"Apple-iPhone-5",
	"type":"phone",
	"price":"75000",
	"imageUrl":"/ShopOn/assets/images/03.jpg"
},
{
	"name":"Apple-iPhone-5S",
	"type":"phone",
	"price":"85000",
	"imageUrl":"/ShopOn/assets/images/04.jpg"
},
{
	"name":"Apple-iPhone-6",
	"type":"phone",
	"price":"71000",
	"imageUrl":"/ShopOn/assets/images/05.jpg"
},
{
	"name":"Apple-iPhone-6S",
	"type":"phone",
	"price":"92000",
	"imageUrl":"/ShopOn/assets/images/06.jpg"
},
{
	"name":"Apple-iPhone-8",
	"type":"phone",
	"price":"84000",
	"imageUrl":"/ShopOn/assets/images/07.jpg"
},
{
	"name":"Apple-iPhone-X",
	"type":"phone",
	"price":"83000",
	"imageUrl":"/ShopOn/assets/images/08.jpg"
},
{
	"name":"Battery",
	"type":"accessories",
	"price":"100",
	"imageUrl":"/ShopOn/assets/images/1.jpg"
},
{
	"name":"Talky",
	"type":"accessories",
	"price":"200",
	"imageUrl":"/ShopOn/assets/images/2.jpg"
},
{
	"name":"Holder",
	"type":"accessories",
	"price":"50",
	"imageUrl":"/ShopOn/assets/images/3.jpg"
},
{
	"name":"Power Bank",
	"type":"accessories",
	"price":"1000",
	"imageUrl":"/ShopOn/assets/images/4.jpg"
},
{
	"name":"Cover",
	"type":"accessories",
	"price":"60",
	"imageUrl":"/ShopOn/assets/images/5.jpg"
},
{
	"name":"Head Phone",
	"type":"accessories",
	"price":"200",
	"imageUrl":"/ShopOn/assets/images/6.jpg"
},
{
	"name":"Memory Card",
	"type":"accessories",
	"price":"400",
	"imageUrl":"/ShopOn/assets/images/7.jpg"
}
];
var str;
var id;
var strLength = data.length;

function getData(){
    for(i=0; i<strLength; i++){
        str = '<div class="col-md-4 col-sm-6 col-xs-12 mobile-block">';
        str += '<div><figure><img src="' + data[i].imageUrl + '" />';
        str += '<figcaption>' + data[i].name + '</figcaption></figure>';
        str += '<div class="price">' + "&#8377;"+" "+data[i].price + '</div>';
        str += '<div class="addtocart">';
        str += '<button class="btn btn-primary btnCart" id='+i+' onclick="myclicked(this.id)">Add to cart</button>';
        str += '</div></div></div>';
    	document.getElementById("showDataDiv").innerHTML += str;
    }
}

var totalTaxAmt = 0;
var totalDiscAmt = 0;
var itemAmt = 0;
var totalAmt = 0;
var j=0;
var threshouldAmt = 500000;
var k=0;

function myclicked(id){
    var selected;
    document.getElementById("cartItems").innerHTML = ++j;
    /*Duplicate item start*/
    var arr = [];
    var obj = {
    	"id":id,
    	"name":data[id].name,
    	"type":data[id].type,
    	"price":data[id].price,
    	"imageUrl":data[id].imageUrl
    };
    arr.splice(k++, 0, obj);
    console.log(arr);
    /*Duplicate item end*/
    	selected='<div class="cartproduct">';
        selected+='<figure>';
        selected+='<img src="'+data[id].imageUrl+'" />';
        selected+='</figure>';
        selected+='<div class="cart-product-name">'+data[id].name+'</div>';
        selected+='<div class="cart-product-price">'+ "&#8377;"+" "+data[id].price+'</div>';
        selected+='<div class="cart-product-qty">';
        selected+='</div>';
    	selected+='</div>';
    document.getElementById("detailsDiv").innerHTML += selected;
    itemAmt = parseInt(data[id].price);
    totalAmt += itemAmt;

    if(totalAmt < threshouldAmt){
    	if(totalAmt > 200000){
    		var discAmt = totalAmt * (8/100);
    		totalDiscAmt = totalAmt - discAmt;
    		var taxAmt = totalAmt * (5/100);
    		totalTaxAmt = totalAmt + taxAmt;
    	}
    	else{
    		var taxAmt1 = totalAmt * (5/100);
    		totalTaxAmt = totalAmt + taxAmt1;
    		totalDiscAmt = 0;
    	}
    }
    else{
    	totalDiscAmt = 0;
    	totalTaxAmt = 0;
    }

    document.getElementById("total-discount-amount").innerHTML = totalDiscAmt;
 	document.getElementById("total-cart-amount").innerHTML = totalTaxAmt;
}

function purchase(){
	if(totalDiscAmt==0 && totalTaxAmt==0){
		alert("Cannot Purchase, please select an item!");
	}
	else{
		alert("Purchased!!!");
	}
}