import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Adviser or Advicer - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;adviser&quot; and &quot;advicer&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function AdviserVsAdvicerPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      {/* Main Heading */}
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">
        Adviser or Advicer
      </h1>
      
      {/* Subtitle */}
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">
          Which Spelling is Correct?
        </h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
          Understanding the difference between &quot;Adviser&quot; or &quot;Advicer&quot;: these commonly confused spellings and how to use them properly.
        </p>
      </div>

      {/* Correct or Incorrect Cards */}
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Advicer</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">
              &quot;Advicer&quot; is a misspelling. The correct spelling is &quot;adviser&quot; with &apos;er&apos; at the end.
            </p>
          </CardContent>
        </Card>

        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Adviser</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">
              &quot;Adviser&quot; is the correct spelling. It means someone who gives advice or counsel.
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Definition Section */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definition of Adviser</h2>
        <div className="bg-white p-6 rounded-lg shadow-md border">
          <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-4">
            <strong>Adviser</strong> (noun): A person who gives advice or counsel; someone who provides guidance, recommendations, or suggestions; a consultant or mentor who offers expertise in a particular area.
          </p>
          <div className="bg-blue-50 p-4 rounded-lg">
            <h4 className="text-xl font-semibold mb-3 text-blue-900">Examples:</h4>
            <ul className="text-lg md:text-xl text-blue-800 space-y-2">
              <li>• The financial <strong>adviser</strong> helped plan her retirement.</li>
              <li>• The student met with her academic <strong>adviser</strong> to discuss course selection.</li>
              <li>• The company hired a business <strong>adviser</strong> to improve operations.</li>
              <li>• The president consulted with his foreign policy <strong>advisers</strong>.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Synonyms Section */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Synonyms for Adviser</h2>
        <div className="bg-blue-100 p-6 rounded-lg">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h4 className="text-xl font-semibold mb-3 text-blue-900">Common Synonyms:</h4>
              <ul className="text-lg md:text-xl text-blue-800 space-y-1">
                <li>• Counselor</li>
                <li>• Consultant</li>
                <li>• Mentor</li>
                <li>• Guide</li>
                <li>• Expert</li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-3 text-blue-900">Related Terms:</h4>
              <ul className="text-lg md:text-xl text-blue-800 space-y-1">
                <li>• Specialist</li>
                <li>• Coach</li>
                <li>• Instructor</li>
                <li>• Tutor</li>
                <li>• Professional</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Usage Notes */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Usage Notes</h2>
        <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500">
          <h3 className="text-xl font-semibold mb-4 text-yellow-900">Important Points:</h3>
          <ul className="text-lg md:text-xl text-yellow-800 space-y-3">
            <li>• <strong>Adviser</strong> is spelled with &apos;er&apos; at the end, not &apos;er&apos;.</li>
            <li>• It&apos;s commonly used in professional, academic, and business contexts.</li>
            <li>• Often refers to someone with expertise in a specific field.</li>
            <li>• The word comes from the verb &quot;advise&quot; + the suffix &quot;-er.&quot;</li>
            <li>• Both &quot;adviser&quot; and &quot;advisor&quot; are acceptable spellings.</li>
          </ul>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;advicer&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: No, &quot;advicer&quot; is never correct. The proper spelling is always &quot;adviser&quot; with &apos;er&apos; at the end.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: Think of &quot;adviser&quot; as coming from &quot;advise&quot; + &quot;er.&quot; The verb &quot;advise&quot; ends in &apos;se&apos;, so the person who does it is an &quot;advis-er.&quot;
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What&apos;s the difference between adviser and advisor?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: Both &quot;adviser&quot; and &quot;advisor&quot; are correct spellings. &quot;Adviser&quot; is more common in British English, while &quot;advisor&quot; is more common in American English.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can adviser be used as a verb?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: No, &quot;adviser&quot; is only used as a noun. The verb form is &quot;advise.&quot;
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is adviser always professional?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: While often used in professional contexts, &quot;adviser&quot; can also refer to informal mentors or guides in personal situations.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Why do people often misspell this word?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: The misspelling &quot;advicer&quot; likely occurs because people may not remember the correct &apos;er&apos; ending or may confuse it with similar words.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are some common phrases using &quot;adviser&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: Common phrases include: financial adviser, academic adviser, business adviser, investment adviser, legal adviser, and policy adviser.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can &quot;adviser&quot; be used in formal writing?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: Yes, &quot;adviser&quot; is appropriate in formal writing. It&apos;s a standard English word that can be used in academic, business, and professional contexts.
            </p>
          </div>
        </div>
      </div>

      {/* Conclusion */}
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">
          Remember: <strong>Adviser</strong> is the correct spelling with &apos;er&apos; at the end. It means someone who gives advice or counsel. The misspelling &quot;advicer&quot; with &apos;er&apos; is never correct. Use this word when referring to someone who provides guidance or expertise in a particular area.
        </p>
      </div>
    </div>
  )
} 