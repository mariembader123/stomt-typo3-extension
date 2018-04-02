
plugin.tx_stomtfeed_stomtfeed {
  view {
    # cat=plugin.tx_stomtfeed_stomtfeed/file; type=string; label=Path to template root (FE)
    templateRootPath = EXT:stomt_feed/Resources/Private/Templates/
    # cat=plugin.tx_stomtfeed_stomtfeed/file; type=string; label=Path to template partials (FE)
    partialRootPath = EXT:stomt_feed/Resources/Private/Partials/
    # cat=plugin.tx_stomtfeed_stomtfeed/file; type=string; label=Path to template layouts (FE)
    layoutRootPath = EXT:stomt_feed/Resources/Private/Layouts/
  }
  persistence {
    # cat=plugin.tx_stomtfeed_stomtfeed//a; type=string; label=Default storage PID
    storagePid =
  }
}
