<?php
namespace STOMT\StomtFeed\Controller;

/***
 *
 * This file is part of the "STOMTFEEDBACK" Extension for TYPO3 CMS.
 *
 * For the full copyright and license information, please read the
 * LICENSE.txt file that was distributed with this source code.
 *
 *  (c) 2018 Mariem Bader <bader.mariem1@gmail.com>, STOMT
 *
 ***/

/**
 * ExampleController
 */
class ExampleController extends \TYPO3\CMS\Extbase\Mvc\Controller\ActionController
{
    /**
     * action list
     * 
     * @return void
     */
    public function listAction()
    {
       //$examples = $this->exampleRepository->findAll();
        $this->view->assign('examples', $examples);
    }
}
