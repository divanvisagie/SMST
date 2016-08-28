# Lorem Ipsum

## "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."

### "There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain..."


Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eget felis nunc. Nunc posuere velit non mi tincidunt, vel feugiat magna iaculis. Donec vel sem dignissim arcu fringilla vulputate fringilla nec nunc. Integer et ligula massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed tristique nibh vel magna faucibus condimentum. Donec eu neque malesuada, tristique augue et, commodo erat. Praesent ac malesuada felis. Curabitur justo orci, ullamcorper sit amet lorem eget, egestas efficitur sapien. Integer eu metus sagittis sem commodo ornare sit amet ut justo. Suspendisse ultrices elit pellentesque lectus consequat luctus. Donec eget sagittis mauris. Aliquam erat volutpat.

Mauris porttitor odio lorem, nec egestas tortor dictum eu. Duis eu dui suscipit mauris dictum fringilla. Praesent sit amet tellus lectus. Morbi vel neque rhoncus augue vestibulum cursus. Proin dictum facilisis egestas. Sed suscipit, erat non sagittis commodo, augue eros maximus nisl, ut sagittis erat ipsum et mi. Ut non iaculis nisl, id luctus leo. Pellentesque posuere ut tellus vel dictum. Mauris ac sem quis quam convallis mattis nec eu tellus. Quisque nec ultrices nunc, in hendrerit nibh. Fusce sit amet consectetur nulla.

```scala
val client: PingService[Future] = ThriftMux.client
    .withTracer(NullTracer)
    .withStatsReceiver(NullStatsReceiver)
    .newIface[PingService.FutureIface]("localhost:9999")


client.ping().onSuccess { response =>
  println(s"response: $response")
}
```

Integer consectetur magna quis lacus dapibus maximus. Sed mi arcu, venenatis at neque at, feugiat semper dui. Sed sagittis auctor arcu et congue. Donec volutpat leo eu feugiat semper. Cras arcu justo, auctor vel massa eget, porta suscipit risus. Cras et tortor neque. Duis nec sem dictum, porta nisl in, ornare risus. Morbi id tristique justo. Quisque id cursus quam. Ut ornare nulla semper urna sollicitudin molestie. Aliquam pulvinar id mi vel sollicitudin. Integer vehicula, est non pellentesque faucibus, ipsum lorem imperdiet ex, id pretium dui nibh eu nunc.

Sed fringilla ac ex a feugiat. In placerat tristique dui nec dignissim. Phasellus et dui nec nunc lobortis blandit. In hac habitasse platea dictumst. Nullam eu commodo elit, non luctus mauris. Proin diam leo, molestie id ex et, cursus accumsan sem. Praesent quis lobortis massa. Sed consectetur dui euismod dui tristique, sed ornare ligula tincidunt. Praesent rhoncus ultrices mauris, et malesuada odio. Aliquam tellus neque, feugiat porttitor suscipit ut, commodo vel nunc. Phasellus et dictum leo, ut pellentesque mi. Morbi at nisl dictum, tristique tellus vitae, ornare urna. Ut enim nisi, lobortis non mauris sit amet, porta placerat leo. Quisque varius ipsum quis magna tempor, ut fermentum neque gravida. Cras et eleifend tortor. Fusce ullamcorper nisl ac tortor molestie, a maximus quam facilisis.

Praesent semper dictum dui, in dictum sem sagittis nec. Etiam cursus a nisi vitae laoreet. Mauris vel pretium urna. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas sed neque commodo, pellentesque sapien eget, accumsan justo. Donec ac quam quam. Aenean id leo est. Fusce eleifend ultrices luctus.
