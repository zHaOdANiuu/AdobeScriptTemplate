declare const thisObj: typeof $.global | Panel

declare type Container = Panel | Group | Window

declare interface TreeViewNode extends ListItem {
  readonly index: number
  readonly items: (ListItem | TreeViewNode)[]
  readonly type: 'node'
  readonly parent: TreeViewNode | TreeView
  image: File | ScriptUIImage | string
  add(type: 'node', text?: string): TreeViewNode
  add(type: 'item', text?: string): ListItem
  add(type: 'node' | 'item', text?: string): TreeViewNode | ListItem
  remove(what: any): void
  removeAll(): void
}
