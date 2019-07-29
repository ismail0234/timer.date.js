## Timer Date JS

Websitelerinde Belirli bir zamanı geriye doğru saymak için kullanılır.

[Demo](https://ismail0234.github.io/timer-date-js/)

### Kullanım

Kullanım adımlarını doğru bir şekilde tamamladığınız taktirde herhangi bir sorun almazsınız. Eğer bir sorun alırsanız bir issue gönderebilirsiniz.

#### Adım 1

Aşağıdaki dosyayı sayfanıza çağırın veya repodan en son versiyonu indirin.

```html
<script src="https://ismail0234.github.io/timer-date-js/timer-date.js"></script>
```

#### Adım 2

İhtiyacınız olan özellikleri kullanarak html'de etiketinizi oluşturun.

```html
<time class="is-counter" time="300" text="kaldı." finish="Tamamlandı!"></time>

<!-- time özelliği -->
<!--// Time özelliği zamanın kaçdan geriye sayacağını belirtir. -->

<!-- text özelliği -->
<!--// Text özelliği zamanın yanına ne yazılacağını belirtir -->

<!-- finish özelliği -->
<!--// Finish özelliği süre bittikten sonra yazılacak olan metini barındırır. 
       Eğer finish özelliği kullanılmaz ise hiçbir şey yazmaz. -->
```

### Adım 3

Js kütüphanemizi sayfaya ekledikten ve **time** etiketimizi ekledikten sonra son adım olarak javascript kodumuzu ekliyoruz.

```js
TimerJS.start('.is-counter');
<!--// Zamanı geri saydırmaya başlıyoruz. -->

TimerJS.start('.is-counter', {
  onFinish: function(element){
      console.log('Zaman Tükendi!');  
  }
});
<!--// TimerJS içerisinde 1 adet hook bulunmakta ve bu hook zaman tükendiğinde çalışmaktadır. -->

```

### Fonksiyonlar

```js
TimerJS.start('selector')
```

Bu fonksiyon oluşturduğunuz html etiketlerinin zamanlarını geriye doğru saymaya başlamanızı sağlar. Fonksiyon geriye işlem uyguladığı bütün zamanlayıcıların TimerID numalarını bir dizi olarak döner.

```js
TimerJS.stop(timerId)
```

**TimerJS.start** ile dönen timerId numalarını buradan zamanlayıcıyı durdurmak için kullanabilirsiniz.

```js
TimerJS.stopAll()
```

Aktif olan bütün zamanlayıcıları durdurmanızı sağlar.

### Örnek

<script src="https://ismail0234.github.io/timer-date-js/timer-date.js"></script>

```html
<time class="is-counter" time="15" text="kaldı." finish="Tamamlandı!"></time>

<script type="text/javascript">
       TimerJS.start('.is-counter');
</script>
```
<center>
<time class="is-counter" time="300" text="kaldı." finish="Tamamlandı!"></time>
</center>

<script type="text/javascript">
       TimerJS.start('.is-counter');
</script>
