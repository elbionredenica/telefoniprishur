var data = []

    var emrat = []

    var fjalet = []
    sneakyDatas = ''
    function merrteDhenat() {
        emrat.push(document.getElementById("emrilojtarit").value)
        fjalet.push(document.getElementById("fjalaedegjuar").value)
        document.getElementById("emrilojtarit").value = '';
        document.getElementById("fjalaedegjuar").value = ''
    }

    function finish() {
        for(var i=0; i<emrat.length; i++) {
            data.push({emri: emrat[i], fjala: fjalet[i]})
        }
        let sneakyDatas;

        data.forEach(element => {
          sneakyDatas += "<tr><th>" + element.emri + "</th><th>" + element.fjala + "</th></tr>"
        });

            
        $('table').append(sneakyDatas)

        
        
        function fitorehumbje() {
        if(data[0].fjala === data[data.length - 1].fjala) {
          alert("Fjala e pare perputhet me te fundit. Ju keni fituar!")
        } else {
          alert("Fjala e pare nuk perputhet me fjalen e fundit. Provoni perseri!")
        }
      }
      setTimeout(fitorehumbje, 1000)
    }