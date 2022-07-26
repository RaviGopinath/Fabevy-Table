var table = document.createElement('table');
var tr = document.createElement('tr');

var arrayHeader = ['Photo', 'Name', 'Mobile', 'Batch','Git', 'Refby', 'Location', 'Placement_status'];
var array = [{
  img: 'image/arun.jpeg',
  Name: 'Arun',
  mobile: '9087654321',
  Batch: 'FSD-10',
  Git: 'arunanbu',
  Refby: 'Nithish',
  Location:'Chennai',
  placment_status:'processing'
},
  {
    img: 'image/Arunclenton.jpeg ',
    Name: 'Arun Clenton',
    mobile: '9807654321',
    Batch: 'FSD-10',
    Git: 'arunclenton',
    Refby: 'Pradeep',
    Location:'Chennai',
    placment_status:'processing'
  },
  {
    img: 'image/Gopinath.jpeg',
    Name: 'Gopinath',
    mobile: '8015820120',
    Batch: 'FSD-10',
    Git: 'RaviGopinath',
    Refby: 'Ahmed Nishanth',
    Location:'Chennai',
    placment_status:'processing'
  }
];

for (var i = 0; i < arrayHeader.length; i++) {
  var th = document.createElement('th');  

  var text = document.createTextNode(arrayHeader[i]);  
  th.appendChild(text);
  tr.appendChild(th);
}
table.appendChild(tr);

// for (var i = 0; i < array.length; i++) {
  array.forEach((Gopi)=>{
  var tr = document.createElement('tr');

  var td1 = document.createElement('td');
  var td2 = document.createElement('td');
  var td3 = document.createElement('td');
  var td4 = document.createElement('td');
  var td5 = document.createElement('td');
  var td6 = document.createElement('td');
  var td7 = document.createElement('td');
  var td8 = document.createElement('td');

  var text1 = document.createElement('img');
  text1.src=Gopi.img;
  td1.appendChild(text1);
  
  text1.setAttribute('class','image' );
  var text2 = document.createTextNode(Gopi.Name);
  var text3 = document.createTextNode(Gopi.mobile);
  var text4 = document.createTextNode(Gopi.Batch);
  var text5 = document.createTextNode(Gopi.Git);
  var text6 = document.createTextNode(Gopi.Refby);
  var text7 = document.createTextNode(Gopi.Location);
  var text8 = document.createTextNode(Gopi.placment_status);
  





  



  td1.appendChild(text1);
  td2.appendChild(text2);
  td3.appendChild(text3);
  td4.appendChild(text4);
  td5.appendChild(text5);
  td6.appendChild(text6);
  td7.appendChild(text7);
  td8.appendChild(text8);

  tr.appendChild(td1);
  tr.appendChild(td2);
  tr.appendChild(td3);
  tr.appendChild(td4);
  tr.appendChild(td5);
  tr.appendChild(td6);
  tr.appendChild(td7);
  tr.appendChild(td8);


 
   
  table.appendChild(tr);

  table.setAttribute("border", "solid 1px");
  table.setAttribute('style', 'width: 100%');
  tr.setAttribute('id', 'cell');
    
})
document.body.appendChild(table);
