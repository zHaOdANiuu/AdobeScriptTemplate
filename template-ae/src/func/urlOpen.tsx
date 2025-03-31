function urlOpen(url: string) {
  system.callSystem(
    $.os.indexOf('Win') === -1 ? 'open http://' + url + '"' : 'cmd.exe /c"start ' + url + '"'
  )
}

export default urlOpen
