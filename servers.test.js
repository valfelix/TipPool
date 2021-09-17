describe("Servers test (with setup and tear-down)", function() {
  beforeEach(function () {
    // initialization logic
    serverNameInput.value = 'Alice';
  });

  it('should add a new server to allServers on submitServerInfo()', function () {
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(1);
    expect(allServers['server' + serverId].serverName).toEqual('Alice');
  });

  it('it should create table row element on updateServerTable()', function () {
    submitServerInfo();
    updateServerTable();

    let serverTbody = document.querySelectorAll('#serverTable tbody tr td');
    expect(serverTbody.length).toEqual(2);
  });

  afterEach(function() {
    // teardown logic
    serverId = 0;
    allServers = {};
    serverTbody.innerHTML = '';
  });
});
