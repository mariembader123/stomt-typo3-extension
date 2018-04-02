
plugin.tx_stomtfeed_stomtfeed {
  view {
    templateRootPaths.0 = EXT:stomt_feed/Resources/Private/Templates/
    templateRootPaths.1 = {$plugin.tx_stomtfeed_stomtfeed.view.templateRootPath}
    partialRootPaths.0 = EXT:stomt_feed/Resources/Private/Partials/
    partialRootPaths.1 = {$plugin.tx_stomtfeed_stomtfeed.view.partialRootPath}
    layoutRootPaths.0 = EXT:stomt_feed/Resources/Private/Layouts/
    layoutRootPaths.1 = {$plugin.tx_stomtfeed_stomtfeed.view.layoutRootPath}
  }
  persistence {
    storagePid = {$plugin.tx_stomtfeed_stomtfeed.persistence.storagePid}
    #recursive = 1
  }
  features {
    #skipDefaultArguments = 1
  }
  mvc {
    #callDefaultActionIfActionCantBeResolved = 1
  }
}

plugin.tx_stomtfeed._CSS_DEFAULT_STYLE (
    textarea.f3-form-error {
        background-color:#FF9F9F;
        border: 1px #FF0000 solid;
    }

    input.f3-form-error {
        background-color:#FF9F9F;
        border: 1px #FF0000 solid;
    }

    .tx-stomt-feed table {
        border-collapse:separate;
        border-spacing:10px;
    }

    .tx-stomt-feed table th {
        font-weight:bold;
    }

    .tx-stomt-feed table td {
        vertical-align:top;
    }

    .typo3-messages .message-error {
        color:red;
    }

    .typo3-messages .message-ok {
        color:green;
    }
)
