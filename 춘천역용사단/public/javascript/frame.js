//남녀
let gender_click1 = (event)=>{
    event.preventDefault();
    document.getElementById('gender1').style.backgroundColor = '#ff0000';
    document.getElementById('gender2').style.backgroundColor = 'rgba(251, 103, 77, 0.541)';
    document.getElementById('form_gender').value = 'boy';
}
let gender_click2 = (event)=>{
    event.preventDefault();
    document.getElementById('gender1').style.backgroundColor = 'rgba(251, 103, 77, 0.541)';
    document.getElementById('gender2').style.backgroundColor = '#ff0000';
    document.getElementById('form_gender').value = 'girl';
}

//둘셋넷
 let count_click1 = (event)=>{
     event.preventDefault();
     document.getElementById('count1').style.backgroundColor = '#ff0000';
     document.getElementById('count2').style.backgroundColor = 'rgba(251, 103, 77, 0.541)';
     document.getElementById('count3').style.backgroundColor = 'rgba(251, 103, 77, 0.541)';
     document.getElementById('form_count').value = '2';
 }
 let count_click2 = (event)=>{
     event.preventDefault();
     document.getElementById('count1').style.backgroundColor = 'rgba(251, 103, 77, 0.541)';
     document.getElementById('count2').style.backgroundColor = '#ff0000';
     document.getElementById('count3').style.backgroundColor = 'rgba(251, 103, 77, 0.541)';
     document.getElementById('form_count').value = '3';
 }
 let count_click3 = (event)=>{
     event.preventDefault();
     document.getElementById('count1').style.backgroundColor = 'rgba(251, 103, 77, 0.541)';
     document.getElementById('count2').style.backgroundColor = 'rgba(251, 103, 77, 0.541)';
     document.getElementById('count3').style.backgroundColor = '#ff0000';
     document.getElementById('form_count').value = '4';
 }
 //결성이닷
 document.getElementById('form_go').addEventListener('click', ()=>{
     let out='';
     if(document.getElementById('form_count').value==''||document.getElementById('form_gender').value==''){
         alert('형식을 다 채워줘!');
     }
     else{
         document.getElementById('form_form').submit();
     }
 });