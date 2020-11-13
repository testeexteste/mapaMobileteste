window.blockly = window.blockly || {};
window.blockly.js = window.blockly.js || {};
window.blockly.js.blockly = window.blockly.js.blockly || {};
window.blockly.js.blockly.APIGoogleMaps = window.blockly.js.blockly.APIGoogleMaps || {};

/**
 * Descreva esta função...
 */
window.blockly.js.blockly.APIGoogleMaps.AutoCompletarSaida = function() {
 var item, destino, saida;
  this.cronapi.maps.createAutoComplete("partida1", 'address', this.cronapi.maps.createLatLngBounds(this.cronapi.maps.createLatLngPoint('-13.0183736\n', '-38.5480934'), this.cronapi.maps.createLatLngPoint('-12.7513579', '-38.1534927')), 'true', '', function(sender_item) {
      item = sender_item;
    this.cronapi.screen.createScopeVariable('saida', item);
  }.bind(this));
}

/**
 * APIGoogleMaps
 */
window.blockly.js.blockly.APIGoogleMaps.Executar = function() {
 var item, destino, saida;
  if (!this.cronapi.maps.isInitialized("map5590")) {
    this.cronapi.maps.init("map5590", 'roadmap', this.cronapi.maps.createLatLngPoint('-13.0011623', '-38.4685141'), '16', function(sender_item) {
        item = sender_item;
      this.blockly.js.blockly.APIGoogleMaps.AutoCompletarSaida();
      this.blockly.js.blockly.APIGoogleMaps.AutoCompletarDestino();
      this.blockly.js.blockly.APIGoogleMaps.Adicionar_marcador();
    }.bind(this));
  }
}

/**
 * Descreva esta função...
 */
window.blockly.js.blockly.APIGoogleMaps.Adicionar_marcador = function() {
 var item, destino, saida;
  this.cronapi.maps.createMarker("map5590", 'cronappId', 'Sede CronApp', this.cronapi.maps.createLatLngPoint('-12.9992582', '-38.4690056'), '', '<h2 style=\"text-align: center;\">Sede do Cronapp em Salvador</h2>\n<h3 style=\"text-align: center;\"><a href=\"https://www.cronapp.io\" target=\"blank\"> https://www.cronapp.io </a></h3>', '');
}

/**
 * Descreva esta função...
 */
window.blockly.js.blockly.APIGoogleMaps.Adiciona_circulo = function() {
 var item, destino, saida;
  this.cronapi.maps.drawCircle("map5590", 'IdCirculo', this.cronapi.maps.createLatLngPoint('-12.9992582', '-38.4690056'), '400', 'gray', 'black', '0.4', '');
}

/**
 * Descreva esta função...
 */
window.blockly.js.blockly.APIGoogleMaps.GeraRota = function() {
 var item, destino, saida;
  destino = this.cronapi.screen.getScopeVariable('destino');
  saida = this.cronapi.screen.getScopeVariable('saida');
  this.cronapi.maps.directionRoute(this.cronapi.maps.createRequestDirection(this.cronapi.maps.createLatLngPoint(this.cronapi.maps.getPropertyFromAutoComplete(saida, 'latitude'), this.cronapi.maps.getPropertyFromAutoComplete(saida, 'longitude')), this.cronapi.maps.createLatLngPoint(this.cronapi.maps.getPropertyFromAutoComplete(destino, 'latitude'), this.cronapi.maps.getPropertyFromAutoComplete(destino, 'longitude')), 'WALKING', null), function(sender_item) {
      item = sender_item;
    this.cronapi.maps.drawRoute("map5590", item, '{\"preserveViewport\": false}', function(sender_item) {
        item = sender_item;
    }.bind(this));
  }.bind(this));
}

/**
 * Descreva esta função...
 */
window.blockly.js.blockly.APIGoogleMaps.AutoCompletarDestino = function() {
 var item, destino, saida;
  this.cronapi.maps.createAutoComplete("chegada1", 'address', this.cronapi.maps.createLatLngBounds(this.cronapi.maps.createLatLngPoint('-13.0183736\n', '-38.5480934'), this.cronapi.maps.createLatLngPoint('-12.7513579', '-38.1534927')), 'true', '', function(sender_item) {
      item = sender_item;
    this.cronapi.screen.createScopeVariable('destino', item);
  }.bind(this));
}

/**
 * Descreva esta função...
 */
window.blockly.js.blockly.APIGoogleMaps.DesenhaRetangulo = function() {
 var item, destino, saida;
  this.cronapi.maps.drawRectangle("map5590", 'ret', this.cronapi.maps.createLatLngBounds(this.cronapi.maps.createLatLngPoint('-13.0183736', '-38.5480934'), this.cronapi.maps.createLatLngPoint('-12.7513579', '-38.1534927')), '', 'black', '', '');
}
