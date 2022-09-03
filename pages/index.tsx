import { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';

import classes from '@/modules/index/Index/Index.module.sass';
import { Button } from '@/components/ui';
import { Page, UnauthenticatedHeader } from '@/components/layouts';
import { Title } from '@/components/typhographies';

import HeroSVG from '@/public/illustration/hero.svg';
import SaveArticlesSVG from '@/public/illustration/save-articles.svg';
import ReadingModeSVG from '@/public/illustration/reading-mode.svg';
import HighlightSVG from '@/public/illustration/highlight.svg';

const IndexPage: NextPage = () => (
	<>
		<Head>
			<title>Tandain</title>
		</Head>
		<Page>
			<UnauthenticatedHeader className={classes.Header} />
			<main className={classes.Main}>
				<section className={classes.Hero} data-testid='hero-section'>
					<div className={classes.LeftPanel}>
						<div className='flex flex-col gap-6'>
							<Title size='xxl' className={classes.HeroTitle}>
								Make reading fun and easy again.
							</Title>
							<p className={classes.HeroDesc}>
								It&apos;s a new journey to read your favorite stories
							</p>
						</div>
						<Button as='a' href='/signup'>
							Get Started
						</Button>
					</div>
					<div className={classes.RightPanel}>
						<Image src={HeroSVG} alt='Hero' />
					</div>
				</section>
				<section className={classes.Desc} data-testid='desc-section'>
					<div className={classes.DescItem}>
						<div className={classes.DescItemBody}>
							<Title as='h3' className={classes.DescItemTitle}>
								Save articles to read later
							</Title>
							<p>
								Tandain give you a broader, easier and more organized way to
								save good stories. Save articles throughout the day to read when
								they’re ready.
							</p>
						</div>
						<div className={classes.DescItemMedia}>
							<div className={classes.DescItemImgContainer}>
								<Image
									src={SaveArticlesSVG}
									alt='Save articles to read later'
								/>
							</div>
						</div>
					</div>
					<div className={classes.DescItem}>
						<div className={classes.DescItemBody}>
							<Title as='h3' className={classes.DescItemTitle}>
								Reading mode
							</Title>
							<p>
								Read stories in friendly mode that eliminates distracting ads,
								fancy layouts, and other extraneous items.
							</p>
						</div>
						<div className={classes.DescItemMedia}>
							<div className={classes.DescItemImgContainer}>
								<Image src={ReadingModeSVG} alt='Reading mode' />
							</div>
						</div>
					</div>
					<div className={classes.DescItem}>
						<div className={classes.DescItemBody}>
							<Title as='h3' className={classes.DescItemTitle}>
								Highlight what matters
							</Title>
							<p>
								Highlight important parts of the stories to make it easier to
								find what you’re looking for.
							</p>
						</div>
						<div className={classes.DescItemMedia}>
							<div className={classes.DescItemImgContainer}>
								<Image src={HighlightSVG} alt='Highlight what matters' />
							</div>
						</div>
					</div>
				</section>
				<section
					className='flex flex-col items-center gap-8'
					data-testid='cta-section'
				>
					<Title as='h2' className={classes.BottomCTATitle}>
						Start to save interesting inspiration
					</Title>
					<Button as='a' href='/signup'>
						Sign Up Now
					</Button>
				</section>
			</main>
		</Page>
	</>
);

export default IndexPage;
