import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Attitude or Aditude - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;attitude&quot; and &quot;aditude&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function AttitudeVsAditudePage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      {/* Main Heading */}
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">
        Attitude or Aditude
      </h1>
      
      {/* Subtitle */}
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">
          Which Spelling is Correct?
        </h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
          Understanding the difference between Attitude or Aditude these commonly confused spellings and how to use them properly.
        </p>
      </div>

      {/* Correct or Incorrect Cards */}
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Aditude</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">
              &quot;Aditude&quot; is a misspelling. The correct spelling has two &apos;t&apos;s in &quot;attitude.&quot;
            </p>
          </CardContent>
        </Card>

        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Attitude</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">
              &quot;Attitude&quot; is the correct spelling. It means a way of thinking or feeling about something.
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Definition Section */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definition of Attitude</h2>
        <div className="bg-white p-6 rounded-lg shadow-md border">
          <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-4">
            <strong>Attitude</strong> (noun): A settled way of thinking or feeling about someone or something, typically one that is reflected in a person&apos;s behavior; a position of the body indicating a particular mental state; a complex mental state involving beliefs, feelings, and values.
          </p>
          <div className="bg-blue-50 p-4 rounded-lg">
            <h4 className="text-xl font-semibold mb-3 text-blue-900">Examples:</h4>
            <ul className="text-lg md:text-xl text-blue-800 space-y-2">
              <li>• Her positive <strong>attitude</strong> helped her overcome many challenges.</li>
              <li>• The student&apos;s <strong>attitude</strong> toward learning improved significantly.</li>
              <li>• His <strong>attitude</strong> toward authority figures was always respectful.</li>
              <li>• The company promotes a customer-first <strong>attitude</strong>.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Synonyms Section */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Synonyms for Attitude</h2>
        <div className="bg-blue-100 p-6 rounded-lg">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h4 className="text-xl font-semibold mb-3 text-blue-900">Common Synonyms:</h4>
              <ul className="text-lg md:text-xl text-blue-800 space-y-1">
                <li>• Outlook</li>
                <li>• Perspective</li>
                <li>• Mindset</li>
                <li>• Disposition</li>
                <li>• Approach</li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-3 text-blue-900">Related Terms:</h4>
              <ul className="text-lg md:text-xl text-blue-800 space-y-1">
                <li>• Stance</li>
                <li>• Position</li>
                <li>• Viewpoint</li>
                <li>• Temperament</li>
                <li>• Demeanor</li>
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
            <li>• <strong>Attitude</strong> is spelled with two &apos;t&apos;s, not one.</li>
            <li>• It&apos;s commonly used in psychology, business, and everyday conversation.</li>
            <li>• Can refer to both mental and physical postures.</li>
            <li>• The word implies a consistent way of thinking or behaving.</li>
            <li>• The word comes from the Latin &quot;aptitudo&quot; meaning &quot;fitness.&quot;</li>
          </ul>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;aditude&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: No, &quot;aditude&quot; is never correct. The proper spelling is always &quot;attitude&quot; with two &apos;t&apos;s.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: Think of &quot;attitude&quot; as having a double &apos;t&apos; - you need to have the right &quot;at-titude&quot; to remember it. The word comes from Latin &quot;aptitudo&quot; meaning &quot;fitness.&quot;
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What&apos;s the difference between attitude and mindset?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: While both refer to ways of thinking, &quot;attitude&quot; often refers to feelings and opinions about specific things, while &quot;mindset&quot; refers to a more general mental framework or approach to life.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can attitude be used as a verb?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: No, &quot;attitude&quot; is only used as a noun. The verb form would be &quot;attitudinize&quot; (though this is rare and formal).
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is attitude always about people?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: No, &quot;attitude&quot; can refer to feelings or opinions about people, things, situations, or abstract concepts. It&apos;s a broad term that covers various types of mental positions.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Why do people often misspell this word?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: The misspelling &quot;aditude&quot; likely occurs because people may not realize there are two &apos;t&apos;s in the word or may confuse it with similar words that have single consonants.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are some common phrases using &quot;attitude&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: Common phrases include: positive attitude, negative attitude, bad attitude, good attitude, attitude problem, attitude adjustment, and can-do attitude.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can &quot;attitude&quot; be used in formal writing?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: Yes, &quot;attitude&quot; is appropriate in formal writing. It&apos;s a standard English word that can be used in academic, business, and professional contexts.
            </p>
          </div>
        </div>
      </div>

      {/* Conclusion */}
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">
          Remember: <strong>Attitude</strong> is the correct spelling with two &apos;t&apos;s. It means a settled way of thinking or feeling about someone or something, typically reflected in behavior. The misspelling &quot;aditude&quot; with one &apos;t&apos; is never correct. Use this word when you want to describe someone&apos;s mental position, outlook, or approach to situations.
        </p>
      </div>
    </div>
  )
} 