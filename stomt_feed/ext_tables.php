<?php
defined('TYPO3_MODE') || die('Access denied.');

call_user_func(
    function($extKey)
    {

        \TYPO3\CMS\Extbase\Utility\ExtensionUtility::registerPlugin(
            'STOMT.StomtFeed',
            'Stomtfeed',
            'STOMTFEEDBACK'
        );

        \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addStaticFile($extKey, 'Configuration/TypoScript', 'STOMTFEEDBACK');

        \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addLLrefForTCAdescr('tx_stomtfeed_domain_model_example', 'EXT:stomt_feed/Resources/Private/Language/locallang_csh_tx_stomtfeed_domain_model_example.xlf');
        \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::allowTableOnStandardPages('tx_stomtfeed_domain_model_example');

    },
    $_EXTKEY
);
