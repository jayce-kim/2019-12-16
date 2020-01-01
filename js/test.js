$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: {
        query: "미움받을 용기",
    },
    headers: {Authorization: "KakaoAK e12c507434b773a888d37a4eaace4ce2"}
})
    .done(function( msg ) {
      console.log(msg);
      // console.log(msg.documents[0].title);
      // console.log(msg.documents[0].thumbnail);
      $("#test").append(`<p>${msg.documents[0].title}</p>`);

      // for(let i= 0; i < msg.documents.length; i++ ) {
      //   console.log(msg.documents[i]);
      // }

      const ages = [11, 22, 35, 45, 31, 4, 15, 94, 55, 42, 64, 8, 17, 100, 21, 5, 62, 77, 99, 14];

      //forEach

      // msg.documents.forEach(function(msg)  {
      //   console.log(msg.authors);
      // });

      //fliter
      // let readBook = [];
      // for(let i = 0; i < ages.length; i++) {
      //   if(ages[i] >= 21)  {
      //     readBook.push(ages[i]);
      //   }
      // }

      // const readBook = ages.filter(function(age){
      //   if(age >= 21)  {
      //     return true;
      //   }
      // });

      // const readBook = ages.filter(age => age => 21);
      //
      // console.log(readBook);

      // const publishBooks = msg.documents.filter( msg => msg.publisher === '인플루엔셜');

      // console.log(publishBooks);

      // const prizeBooks = msg.documents.filter( books => (books.price >= 13000));

      // console.log(prizeBooks);

      //map

      // const bookNames = msg.documents.map(function (book) {
      //   return book.title;
      // });

      // const pTest = msg.documents.map(function (book) {
      //   return `${book.authors} ${book.price}원 판매`;
      // });

      // const pTest = msg.documents.map(book => `${book.authors} ${book.price}원 판매`);
      //
      // console.log(pTest);

      // const agesSqauare = ages
      //   .map(age => Math.sqrt(age))
      //   .map(age => age * 2);
      //
      // console.log(agesSqauare);


      //sort


      // const sortedBooks = msg.documents.sort(function (b1, b2) {
      //   if(b1.price > b2.price) {
      //       return 1;
      //   } else {
      //     return -1;
      //   }
      // });

      // const sortedBooks = msg.documents.sort((a,b) => (a.price > b.price ? 1 : -1))
      //
      // console.log(sortedBooks);


      // const sortAges = ages.sort((a, b) => b - a);
      //
      // console.log(sortAges);

      // let ageSums = 0;
      //
      // for(let i = 0; i < ages.length; i++) {
      //   ageSums += ages[i];
      // }

      // const ageSums = ages.reduce(function(total, age){
      //   return total + age;
      // }, 0);

      const ageSums = ages.reduce((total, age) => total + age, 0);

      console.log(ageSums);

    });
