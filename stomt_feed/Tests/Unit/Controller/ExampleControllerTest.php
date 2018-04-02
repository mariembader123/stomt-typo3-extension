<?php
namespace STOMT\StomtFeed\Tests\Unit\Controller;

/**
 * Test case.
 *
 * @author Mariem Bader <bader.mariem1@gmail.com>
 */
class ExampleControllerTest extends \TYPO3\CMS\Core\Tests\UnitTestCase
{
    /**
     * @var \STOMT\StomtFeed\Controller\ExampleController
     */
    protected $subject = null;

    protected function setUp()
    {
        parent::setUp();
        $this->subject = $this->getMockBuilder(\STOMT\StomtFeed\Controller\ExampleController::class)
            ->setMethods(['redirect', 'forward', 'addFlashMessage'])
            ->disableOriginalConstructor()
            ->getMock();
    }

    protected function tearDown()
    {
        parent::tearDown();
    }

    /**
     * @test
     */
    public function listActionFetchesAllExamplesFromRepositoryAndAssignsThemToView()
    {

        $allExamples = $this->getMockBuilder(\TYPO3\CMS\Extbase\Persistence\ObjectStorage::class)
            ->disableOriginalConstructor()
            ->getMock();

        $exampleRepository = $this->getMockBuilder(\::class)
            ->setMethods(['findAll'])
            ->disableOriginalConstructor()
            ->getMock();
        $exampleRepository->expects(self::once())->method('findAll')->will(self::returnValue($allExamples));
        $this->inject($this->subject, 'exampleRepository', $exampleRepository);

        $view = $this->getMockBuilder(\TYPO3\CMS\Extbase\Mvc\View\ViewInterface::class)->getMock();
        $view->expects(self::once())->method('assign')->with('examples', $allExamples);
        $this->inject($this->subject, 'view', $view);

        $this->subject->listAction();
    }
}
