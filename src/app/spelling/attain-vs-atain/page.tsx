import { Metadata } from 'next'
import { Card } from '@/components/ui/card'
import { CheckCircle, XCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Attain vs Atain - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between "attain" and "atain". Discover definitions, examples, and usage tips to avoid this common spelling mistake.',
  keywords: 'attain vs atain, spelling, correct spelling, attain, atain, word comparison',
  openGraph: {
    title: 'Attain vs Atain - Which is Correct?',
    description: 'Learn the correct spelling between "attain" and "atain". Discover definitions, examples, and usage tips.',
    type: 'website',
  },
}

export default function AttainVsAtainPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-8">Attain vs Atain</h1>
      
      <div className="bg-gradient-to-r from-blue-100 to-purple-100 p-6 rounded-lg mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">
          Which Spelling is Correct?
        </h2>
        <p className="text-lg md:text-xl text-center">
          Learn the difference between these commonly confused spellings and when to use each one.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-green-200 bg-green-50">
          <div className="p-6">
            <div className="flex items-center mb-4">
              <CheckCircle className="text-green-600 mr-2" size={24} />
              <h3 className="text-xl font-bold text-green-800">Correct: Attain</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">
              The correct spelling is <strong>attain</strong>. This is the standard English spelling used in all contexts.
            </p>
          </div>
        </Card>

        <Card className="border-red-200 bg-red-50">
          <div className="p-6">
            <div className="flex items-center mb-4">
              <XCircle className="text-red-600 mr-2" size={24} />
              <h3 className="text-xl font-bold text-red-800">Incorrect: Atain</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">
              <strong>Atain</strong> is a misspelling. The correct spelling is &quot;attain&quot; with two &quot;t&quot;s.
            </p>
          </div>
        </Card>
      </div>

      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6">Definition of Attain</h2>
        <div className="bg-gray-50 p-6 rounded-lg">
          <p className="text-lg md:text-xl mb-4">
            <strong>Attain</strong> (verb): To succeed in achieving something, especially after a lot of effort; to reach or gain something through work or skill.
          </p>
          <p className="text-lg md:text-xl mb-4">
            <strong>Attain</strong> can also mean to reach a particular age, level, or condition.
          </p>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6">Examples of Correct Usage</h2>
        <div className="space-y-4">
          <div className="bg-white p-4 rounded-lg border">
            <p className="text-lg md:text-xl">
              <strong>Correct:</strong> &quot;She worked hard to <em>attain</em> her goal of becoming a doctor.&quot;
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg border">
            <p className="text-lg md:text-xl">
              <strong>Correct:</strong> &quot;The company hopes to <em>attain</em> higher profits this year.&quot;
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg border">
            <p className="text-lg md:text-xl">
              <strong>Correct:</strong> &quot;He <em>attained</em> the age of 65 and decided to retire.&quot;
            </p>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6">Synonyms for Attain</h2>
        <div className="bg-blue-50 p-6 rounded-lg">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-bold text-lg mb-2">As &quot;achieve&quot;:</h4>
              <ul className="text-lg md:text-xl space-y-1">
                <li>• Achieve</li>
                <li>• Accomplish</li>
                <li>• Reach</li>
                <li>• Gain</li>
                <li>• Obtain</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-2">As &quot;reach&quot;:</h4>
              <ul className="text-lg md:text-xl space-y-1">
                <li>• Reach</li>
                <li>• Arrive at</li>
                <li>• Get to</li>
                <li>• Come to</li>
                <li>• Arrive</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6">Common Usage Notes</h2>
        <div className="bg-yellow-50 p-6 rounded-lg">
          <ul className="text-lg md:text-xl space-y-3">
            <li>• <strong>Attain</strong> is commonly used in both formal and informal contexts</li>
            <li>• The word often implies effort, skill, or work to achieve something</li>
            <li>• Common phrases include &quot;attain success,&quot; &quot;attain goals,&quot; and &quot;attain knowledge&quot;</li>
            <li>• The past tense is &quot;attained&quot; and the present participle is &quot;attaining&quot;</li>
            <li>• Remember: there are two &quot;t&quot;s in &quot;attain&quot; - think of &quot;at&quot; + &quot;tain&quot;</li>
          </ul>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>
        <div className="space-y-4">
          <div className="bg-white p-6 rounded-lg border">
            <h4 className="font-bold text-lg mb-2">Q: Why do people misspell &quot;attain&quot; as &quot;atain&quot;?</h4>
            <p className="text-lg md:text-xl">
              A: This misspelling likely occurs due to phonetic confusion. The double &quot;t&quot; sound might be heard as a single &quot;t&quot;, leading to the incorrect spelling.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg border">
            <h4 className="font-bold text-lg mb-2">Q: Is &quot;atain&quot; ever correct?</h4>
            <p className="text-lg md:text-xl">
              A: No, &quot;atain&quot; is never correct in English. It&apos;s always a misspelling of &quot;attain.&quot;
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg border">
            <h4 className="font-bold text-lg mb-2">Q: How can I remember the correct spelling?</h4>
            <p className="text-lg md:text-xl">
              A: Think of the word as &quot;at&quot; + &quot;tain&quot; - you need to &quot;tain&quot; (obtain) something &quot;at&quot; a certain level. You can also remember that &quot;attain&quot; has the same double &quot;t&quot; pattern as &quot;attack&quot; and &quot;attempt.&quot;
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg border">
            <h4 className="font-bold text-lg mb-2">Q: What&apos;s the difference between &quot;attain&quot; and &quot;obtain&quot;?</h4>
            <p className="text-lg md:text-xl">
              A: &quot;Attain&quot; typically means to achieve or reach something through effort or skill, while &quot;obtain&quot; means to get or acquire something, often through any means. &quot;Attain&quot; often implies more effort or achievement than &quot;obtain.&quot;
            </p>
          </div>
        </div>
      </div>

      <div className="bg-gray-100 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Summary</h2>
        <p className="text-lg md:text-xl">
          The correct spelling is <strong>attain</strong>. <strong>Atain</strong> is always incorrect. 
          Remember that &quot;attain&quot; has two &quot;t&quot;s and can be broken down as &quot;at&quot; + &quot;tain&quot;. 
          This word is commonly used to mean achieving or reaching something through effort or skill.
        </p>
      </div>
    </div>
  )
} 