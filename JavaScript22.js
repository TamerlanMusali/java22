1
//Что такое событие?
//Все действия посетителей, на которые может реагировать веб-страница, называются событиями


2
//Перечисли ниже общие события из Jquery
//click, dblclick
//mouseenter
//mouseleave

3
//Назнать для тега ниже событие клика 
$('.btn').click(function(){

});


4
//Назнать для тега ниже событие клика которое выводит в консоли сообщение "Click"
$('.btn').click(function(){
    console.log('Click')
});

6
//Для чего предназначен метод ниже?
$("p").hide();
//спрятать

7
//Для чего предназначен метод ниже?
$("p").show();
//показать

//Для чего предназначен метод ниже опиши его работу?
$(".block").dblclick(() => {
    $("#block").hide();
});
//для двойного клика. при двойном клике спрять элемент

9
//Для чего предназначен метод ниже опиши его работу?
$(".block").mouseenter(() => {
    $("#block").hide();
});
////при косани на элемента указателем мышкой то вывести на экране алерт

10
//Для чего предназначен метод ниже опиши его работу?
$(".block").mouseleave(() => {
    alert("Please enter email...")
});
//когда указатель мышки покидает элемент то вывести на экране алерт

11
//Для чего предназначен метод ниже опиши его работу?
$(".block").mousedown(() => {
    alert("Please enter tel...")
});
//когда левая, средняя или правая кнопки мыши нажаты, когда мышь находится над элементом

12
//Для чего предназначен метод ниже опиши его работу?
$(".block").mouseup(() => {
    alert("Please enter password...")
});
//когда левая, средняя или правая кнопки мыши отпущена, когда мышь находится над элементом

13
//Для чего предназначен метод ниже опиши его работу?
$(".block").hover(() => {
    alert("Please enter address...")
});
//это функция выполняет работу mouseenter и mouseleave

14
//Для чего предназначен метод ниже опиши его работу?
$(".block").focus(() => {
    alert("Please enter birthday...")
});
//это функция выполняется, когда поле формы получает фокус

15
//Для чего предназначен метод ниже опиши его работу?
$(".block").blur(() => {
    alert("Please enter name...")
});
//это функция выполняется, когда поле формы теряет фокус

16
//Обьедини все события ниже с помощью on?
$(".block").blur(() => {
    alert("Please enter name...")
});

$(".block").focus(() => {
    alert("Please enter birthday...")
});

$(".block").mouseup(() => {
    alert("Please enter password...")
});
















$('.btn').click(function(){
    $(this).parent().css('backgroung', 'orange')
})