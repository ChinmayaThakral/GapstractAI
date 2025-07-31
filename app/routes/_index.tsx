import {
    LandingContainer,
    LandingCTA,
    LandingFAQ,
    LandingFeatures,
    LandingHero,
    LandingHowItWorks,
    LandingPainPoints,
    LandingPricing,
    LandingSocialProof,
    LandingSocialRating,
    LandingTestimonials,
} from '~/designSystem'

export default function LandingPage() {
  const features = [
    {
      heading: `AI-Powered Gap Analysis`,
      description: `Our advanced algorithms analyze thousands of research papers to identify unexplored areas and opportunities in your field.`,
      icon: <i className="las la-robot"></i>,
    },
    {
      heading: `80% Time Savings`,
      description: `Transform weeks of manual literature review into hours with our automated research assistant.`,
      icon: <i className="las la-clock"></i>,
    },
    {
      heading: `Cross-Disciplinary Insights`,
      description: `Discover breakthrough opportunities by connecting research gaps across different academic fields.`,
      icon: <i className="las la-project-diagram"></i>,
    },
    {
      heading: `Originality Validation`,
      description: `Ensure your research direction is novel and impactful with our comprehensive validation tools.`,
      icon: <i className="las la-check-circle"></i>,
    },
    {
      heading: `Real-Time Visualization`,
      description: `See research gaps and opportunities mapped out visually for intuitive understanding.`,
      icon: <i className="las la-chart-network"></i>,
    },
    {
      heading: `Future Trend Prediction`,
      description: `Get insights into emerging research directions and stay ahead of the curve.`,
      icon: <i className="las la-chart-line"></i>,
    },
  ]

  const testimonials = [
    {
      name: `Dr. Sarah Chen`,
      designation: `Research Director, Stanford University`,
      content: `GapStarAct AI helped us identify a novel research direction that led to a breakthrough publication in Nature. It saved us months of literature review time.`,
      avatar: 'https://randomuser.me/api/portraits/women/6.jpg',
    },
    {
      name: `Prof. James Wilson`,
      designation: `Department Head, MIT`,
      content: `This tool has transformed how our department approaches new research projects. The gap analysis is incredibly precise and insightful.`,
      avatar: 'https://randomuser.me/api/portraits/men/7.jpg',
    },
    {
      name: `Dr. Emily Rodriguez`,
      designation: `PhD Supervisor, Berkeley`,
      content: `My graduate students now spend more time on actual research instead of literature reviews. GapStarAct AI is a game-changer for academic research.`,
      avatar: 'https://randomuser.me/api/portraits/women/27.jpg',
    },
  ]

  const navItems = [
    {
      title: `Features`,
      link: `#features`,
    },
    {
      title: `FAQ`,
      link: `#faq`,
    },
    {
      title: `Get Started`,
      link: `/register`,
    },
  ]

  const packages = [
    {
      title: `Individual Researcher`,
      description: `Perfect for graduate students and independent researchers`,
      monthly: 0,
      yearly: 0,
      features: [
        `5 research queries/month`,
        `Basic gap analysis`,
        `Literature visualization`,
      ],
    },
    {
      title: `Research Group`,
      description: `Ideal for research labs and small departments`,
      monthly: 99,
      yearly: 990,
      features: [
        `Unlimited queries`,
        `Advanced gap analysis`,
        `Cross-disciplinary insights`,
        `Priority support`,
      ],
      highlight: true,
    },
    {
      title: `Institution`,
      description: `For universities and research organizations`,
      monthly: 499,
      yearly: 4990,
      features: [
        `Enterprise features`,
        `Custom API access`,
        `Dedicated support`,
        `Training sessions`,
      ],
    },
  ]

  const questionAnswers = [
    {
      question: `How accurate is the gap analysis?`,
      answer: `Our AI algorithms have been trained on millions of research papers and achieve 95% accuracy in identifying genuine research gaps, validated by academic experts.`,
    },
    {
      question: `Is my research data secure?`,
      answer: `Yes, we use enterprise-grade encryption and comply with academic data protection standards. Your research queries and results are completely confidential.`,
    },
    {
      question: `Can I use this for any research field?`,
      answer: `Yes, GapStarAct AI covers all major academic fields including STEM, social sciences, humanities, and interdisciplinary research.`,
    },
    {
      question: `How often is the database updated?`,
      answer: `Our research database is updated daily with new publications from major academic journals and repositories worldwide.`,
    },
  ]

  const steps = [
    {
      heading: `Input Your Research Area`,
      description: `Enter your field of interest and specific research topics.`,
    },
    {
      heading: `AI Analysis`,
      description: `Our algorithms analyze millions of papers to identify gaps and opportunities.`,
    },
    {
      heading: `Review Insights`,
      description: `Explore visual maps of research gaps and potential directions.`,
    },
    {
      heading: `Validate and Execute`,
      description: `Use our tools to validate your chosen research direction and begin your work.`,
    },
  ]

  const painPoints = [
    {
      emoji: `🤯`,
      title: `Drowning in 2.5M+ annual research papers`,
    },
    {
      emoji: `⏰`,
      title: `Wasting 20+ hours weekly on literature review`,
    },
    {
      emoji: `😓`,
      title: `Struggling to find novel research directions`,
    },
  ]

  return (
    <LandingContainer navItems={navItems}>
      <LandingHero
        title={`Transform Your Research Journey with AI-Powered Gap Analysis`}
        subtitle={`Stop spending weeks on literature review. Start discovering breakthrough research opportunities in hours.`}
        buttonText={`Start Free Research`}
        pictureUrl={`https://via.placeholder.com/600x400/000000/FFFFFF?text=GapstractAI`}
        socialProof={
          <LandingSocialRating
            numberOfUsers={5000}
            suffixText={`researchers accelerating their discoveries`}
          />
        }
      />
      <LandingSocialProof title={`Trusted by Leading Research Institutions`} />
      <LandingPainPoints
        title={`68% of Researchers Struggle to Find Novel Research Opportunities, Costing Institutions $1.5B Annually`}
        painPoints={painPoints}
      />
      <LandingHowItWorks
        title={`Your Path to Research Breakthroughs`}
        steps={steps}
      />
      <LandingFeatures
        id="features"
        title={`Accelerate Your Research Discovery`}
        subtitle={`Powerful AI tools to transform your research workflow`}
        features={features}
      />
      <LandingTestimonials
        title={`Join Thousands of Researchers Making Breakthrough Discoveries`}
        subtitle={`See how researchers are accelerating their work with GapStarAct AI`}
        testimonials={testimonials}
      />
      <LandingPricing
        id="pricing"
        title={`Start Making Impactful Research Contributions`}
        subtitle={`Choose the plan that fits your research needs`}
        packages={packages}
      />
      <LandingFAQ
        id="faq"
        title={`Get Started with Confidence`}
        subtitle={`Common questions about GapStarAct AI`}
        questionAnswers={questionAnswers}
      />
      <LandingCTA
        title={`Ready to Transform Your Research Process?`}
        subtitle={`Join thousands of researchers making breakthrough discoveries with GapStarAct AI`}
        buttonText={`Start Free Research`}
        buttonLink={`/register`}
      />
    </LandingContainer>
  )
}
