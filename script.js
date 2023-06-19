function convertir() {
    var texto = document.getElementById('texto').value;
    console.log('Texto: ' + texto);  
    var binario = textoASCIIToBinario(texto);
    console.log('Binario: ' + binario);
    var adn = binarioToADN(binario);
    console.log('ADN: ' + adn);  
    document.getElementById('resultado').innerText = adn;
  }
  
  function textoASCIIToBinario(texto) {
    var binario = '';
    for (var i = 0; i < texto.length; i++) {
      var bin = texto.charCodeAt(i).toString(2);
      bin = bin.padStart(8, '0');
      binario += bin;
    }
    return binario;
  }
  
  function binarioToADN(binario) {
    var adn = '';
    var mapeo = {'00': 'A', '01': 'C', '10': 'G', '11': 'T'};
    for (var i = 0; i < binario.length; i += 2) {
      var duple = binario.substring(i, i+2);
      adn += mapeo[duple];
    }
    return adn;
  }
  