<?php
defined('TYPO3_MODE') || die('Access denied.');

call_user_func(
    function($extKey)
	{

        \TYPO3\CMS\Extbase\Utility\ExtensionUtility::configurePlugin(
            'STOMT.StomtFeed',
            'Stomtfeed',
            [
                'Example' => 'list'
            ],
            // non-cacheable actions
            [
                'Example' => ''
            ]
        );

	// wizards
	\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addPageTSConfig(
		'mod {
			wizards.newContentElement.wizardItems.plugins {
				elements {
					stomtfeed {
						icon = ' . \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::extRelPath($extKey) . 'Resources/Public/Icons/user_plugin_stomtfeed.svg
						title = LLL:EXT:stomt_feed/Resources/Private/Language/locallang_db.xlf:tx_stomt_feed_domain_model_stomtfeed
						description = LLL:EXT:stomt_feed/Resources/Private/Language/locallang_db.xlf:tx_stomt_feed_domain_model_stomtfeed.description
						tt_content_defValues {
							CType = list
							list_type = stomtfeed_stomtfeed
						}
					}
				}
				show = *
			}
	   }'
	);
    },
    $_EXTKEY
);
