import { Metadata } from 'next'
import { Card } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Assiduous vs Assidious - Which is Correct? | Word Tips',
  description: 'Learn the correct spelling between "assiduous" and "assidious". Discover the proper usage, definitions, and common mistakes to avoid.',
}

export default function AssiduousVsAssidiousPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-5xl font-extrabold mb-4 text-gray-900">Assiduous vs Assidious</h1>
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg inline-block">
          <p className="text-lg md:text-xl font-semibold">Which spelling is correct?</p>
        </div>
      </div>

      {/* Correct vs Incorrect Cards */}
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-200 bg-red-50 p-6">
          <div className="flex items-center mb-4">
            <span className="text-3xl mr-3">❌</span>
            <h2 className="text-2xl font-bold text-red-800">Incorrect</h2>
          </div>
          <div className="text-center">
            <div className="text-6xl font-bold text-red-600 mb-4">assidious</div>
            <p className="text-lg md:text-xl text-red-700">This spelling is incorrect and should not be used.</p>
          </div>
        </Card>

        <Card className="border-2 border-green-200 bg-green-50 p-6">
          <div className="flex items-center mb-4">
            <span className="text-3xl mr-3">✅</span>
            <h2 className="text-2xl font-bold text-green-800">Correct</h2>
          </div>
          <div className="text-center">
            <div className="text-6xl font-bold text-green-600 mb-4">assiduous</div>
            <p className="text-lg md:text-xl text-green-700">This is the correct spelling with &quot;u&quot; instead of &quot;i.&quot;</p>
          </div>
        </Card>
      </div>

      {/* Definition Section */}
      <Card className="mb-8 p-6">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definition</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Assiduous (adjective)</h3>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              Showing great care, attention, and effort; diligent and persistent in work or study. 
              Someone who is assiduous works hard and pays careful attention to detail.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Examples:</h3>
            <ul className="list-disc list-inside space-y-2 text-lg md:text-xl text-gray-700">
              <li>She was an <strong>assiduous</strong> student who never missed a class.</li>
              <li>His <strong>assiduous</strong> research led to groundbreaking discoveries.</li>
              <li>The <strong>assiduous</strong> worker completed the project ahead of schedule.</li>
              <li>Her <strong>assiduous</strong> attention to detail made her an excellent editor.</li>
            </ul>
          </div>
        </div>
      </Card>

      {/* Why the Confusion */}
      <Card className="mb-8 p-6">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Why the Confusion?</h2>
        <div className="space-y-4 text-lg md:text-xl text-gray-700 leading-relaxed">
          <p>
            The confusion between &quot;assiduous&quot; and &quot;assidious&quot; likely stems from:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>Phonetic similarity:</strong> Both spellings might sound similar when pronounced</li>
            <li><strong>Typographical errors:</strong> Confusing &quot;u&quot; and &quot;i&quot; when typing</li>
            <li><strong>Unfamiliar word:</strong> Not commonly used in everyday conversation</li>
            <li><strong>Similar word patterns:</strong> Some words do have &quot;i&quot; in similar positions</li>
            <li><strong>Lack of exposure:</strong> Not seeing the correct spelling frequently enough</li>
          </ul>
        </div>
      </Card>

      {/* Etymology and Spelling Rules */}
      <Card className="mb-8 p-6">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Etymology and Spelling Rules</h2>
        <div className="space-y-4 text-lg md:text-xl text-gray-700 leading-relaxed">
          <p>
            <strong>Word origin:</strong> The word &quot;assiduous&quot; comes from the Latin &quot;assiduus,&quot; 
            meaning &quot;constant&quot; or &quot;diligent.&quot;
          </p>
          <div className="bg-blue-50 p-4 rounded-lg">
            <h4 className="font-semibold mb-2 text-blue-900">Spelling pattern:</h4>
            <ul className="list-disc list-inside space-y-1 text-blue-800">
              <li>Double &quot;s&quot; after &quot;a&quot;</li>
              <li>Single &quot;i&quot; in the middle</li>
              <li>&quot;du&quot; combination (not &quot;di&quot;)</li>
              <li>&quot;ous&quot; suffix for adjective formation</li>
            </ul>
          </div>
          <p className="mt-4">
            <strong>Memory tip:</strong> Think of &quot;assiduous&quot; as having &quot;du&quot; (like &quot;due&quot;) 
            because someone who is assiduous is &quot;due&quot; to succeed through their hard work.
          </p>
        </div>
      </Card>

      {/* Synonyms */}
      <Card className="mb-8 p-6 bg-blue-50">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Synonyms for &quot;Assiduous&quot;</h2>
        <div className="grid md:grid-cols-2 gap-4 text-lg md:text-xl">
          <div>
            <h3 className="font-semibold mb-2 text-blue-900">Formal:</h3>
            <ul className="list-disc list-inside space-y-1 text-blue-800">
              <li>diligent</li>
              <li>industrious</li>
              <li>persistent</li>
              <li>meticulous</li>
              <li>conscientious</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-2 text-blue-900">Contextual:</h3>
            <ul className="list-disc list-inside space-y-1 text-blue-800">
              <li>hardworking</li>
              <li>thorough</li>
              <li>attentive</li>
              <li>dedicated</li>
              <li>painstaking</li>
            </ul>
          </div>
        </div>
      </Card>

      {/* Usage Tips */}
      <Card className="mb-8 p-6">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Usage Tips</h2>
        <div className="space-y-4 text-lg md:text-xl text-gray-700 leading-relaxed">
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">When to use &quot;assiduous&quot;:</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>To describe someone who works very hard and carefully</li>
              <li>In academic or professional contexts</li>
              <li>To emphasize attention to detail and persistence</li>
              <li>In formal writing or speeches</li>
              <li>To praise someone&apos;s work ethic</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Common contexts:</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>Academic writing</li>
              <li>Professional references</li>
              <li>Performance evaluations</li>
              <li>Formal speeches</li>
              <li>Literary works</li>
            </ul>
          </div>
        </div>
      </Card>

      {/* FAQ Section */}
      <Card className="mb-8 p-6">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Q: Is &quot;assidious&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              A: No, &quot;assidious&quot; is never correct in standard English. It is always a spelling error for &quot;assiduous.&quot;
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Q: What&apos;s the pronunciation of &quot;assiduous&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              A: It is pronounced as /əˈsɪdʒuəs/ with the stress on the second syllable. The &quot;du&quot; is pronounced as &quot;joo.&quot;
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Q: Are there related words with similar spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              A: Yes, &quot;assiduity&quot; (the quality of being assiduous) and &quot;assiduously&quot; (the adverb form) 
              also have the same &quot;du&quot; spelling pattern.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Q: How can I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              A: Remember that &quot;assiduous&quot; has &quot;du&quot; (like &quot;due&quot;) because someone who is assiduous 
              is &quot;due&quot; to succeed. Think: assiduous = &quot;as + sid + uous&quot; with &quot;u&quot; for success.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Q: Is this a common spelling mistake?</h3>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              A: Yes, this is a relatively common spelling error, especially since it&apos;s not a frequently used word 
              and the &quot;u&quot; vs &quot;i&quot; distinction can be confusing.
            </p>
          </div>
        </div>
      </Card>

      {/* Summary */}
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">
          <strong>&quot;Assiduous&quot;</strong> is the correct spelling with &quot;u&quot; in the &quot;du&quot; combination. 
          The spelling &quot;assidious&quot; is incorrect and should never be used. This word comes from Latin &quot;assiduus&quot; 
          and maintains the &quot;du&quot; spelling pattern. Remember that &quot;assiduous&quot; has &quot;du&quot; because 
          someone who is assiduous is &quot;due&quot; to succeed through their hard work and diligence.
        </p>
      </div>
    </div>
  )
} 