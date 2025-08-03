import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Technical vs Tecnical - Correct Spelling & Professional Usage | Word Finder',
  description: 'Learn the correct spelling: &quot;technical&quot; vs &quot;tecnical&quot;. Master professional terminology, definitions, and avoid common spelling errors.',
}

export default function TechnicalVsTecnicalPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="text-center mb-8">
        <h1 className="text-5xl font-extrabold mb-4 text-gray-900">Technical vs Tecnical</h1>
        <p className="text-xl text-gray-600">Professional Terminology & Spelling Guide</p>
      </div>

      <div className="bg-gradient-to-r from-slate-50 to-gray-50 p-6 rounded-lg mb-8 border-l-4 border-slate-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Professional Terminology & Spelling Rules</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Master the correct spelling between &quot;technical&quot; and &quot;tecnical&quot;. Learn professional terminology, word formation, and proper usage patterns.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Tecnical</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Tecnical&quot; is incorrect. The proper spelling is &quot;technical&quot; with &quot;h&quot; in the middle.</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Technical</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Technical&quot; is the correct spelling. It means &quot;relating to technique or technology.&quot;</p>
          </CardContent>
        </Card>
      </div>

      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definitions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-green-900">Technical (adjective):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">Relating to technique, technology, or specialized knowledge; requiring special skills or expertise.</p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-green-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-green-800 space-y-2">
                  <li>• The <strong>technical</strong> specifications are complex.</li>
                  <li>• She has strong <strong>technical</strong> skills.</li>
                  <li>• This is a <strong>technical</strong> document.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-red-900">Tecnical (word):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">&quot;Tecnical&quot; is a misspelling and is not a valid English word.</p>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-red-900">Common Error:</h4>
                <ul className="text-lg md:text-xl text-red-800 space-y-2">
                  <li>• &quot;Tecnical&quot; is never used in standard English.</li>
                  <li>• Always use <strong>technical</strong> when referring to technical matters.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Synonyms</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-green-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-green-900">Technical:</h4>
              <ul className="text-lg md:text-xl text-green-800 space-y-1">
                <li>• Specialized</li>
                <li>• Professional</li>
                <li>• Expert</li>
                <li>• Skilled</li>
                <li>• Advanced</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-red-900">Tecnical:</h4>
              <ul className="text-lg md:text-xl text-red-800 space-y-1">
                <li>• (No valid synonyms; not a standard English word)</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Notes</h2>
        <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500">
          <h3 className="text-xl font-semibold mb-4 text-yellow-900">Spelling Rules:</h3>
          <ul className="text-lg md:text-xl text-yellow-800 space-y-3">
            <li>• <strong>Technical</strong> is spelled with &quot;h&quot; in the middle: tech-nic-al.</li>
            <li>• The word comes from Greek &quot;technikos&quot; + the suffix &quot;-al.&quot;</li>
            <li>• &quot;Tecnical&quot; is a common misspelling that should be avoided.</li>
            <li>• Remember: technical has &quot;h&quot; like &quot;technology.&quot;</li>
          </ul>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are the grammar rules for &quot;technical&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: &quot;Technical&quot; functions as an adjective that modifies nouns to indicate specialized knowledge, skills, or expertise.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How does &quot;technical&quot; differ from &quot;technological&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: &quot;Technical&quot; refers to technique, skill, or method, while &quot;technological&quot; specifically relates to technology and its applications.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What part of speech is &quot;technical&quot; in sentences?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: &quot;Technical&quot; is an adjective that modifies nouns to describe specialized or professional characteristics.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can &quot;technical&quot; be used in academic writing?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;technical&quot; is perfectly acceptable in academic and formal writing contexts.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are the origins of the word &quot;technical&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: &quot;Technical&quot; comes from Greek &quot;technikos&quot; meaning &quot;relating to art or skill&quot; + the Latin suffix &quot;-al.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do you use &quot;technical&quot; in different sentence structures?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: &quot;Technical&quot; can be used as an attributive adjective (&quot;technical problem&quot;) or predicative adjective (&quot;The issue is technical&quot;).</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are common collocations with &quot;technical&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Common collocations include: technical support, technical skills, technical documentation, technical specifications, technical analysis, and technical expertise.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do you teach children the difference between &quot;technical&quot; and &quot;tecnical&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Use visual aids showing &quot;technical&quot; has an &quot;h&quot; (like &quot;technology&quot;), and emphasize that &quot;tecnical&quot; is not a real word.</p>
          </div>
        </div>
      </div>

      <div className="bg-slate-50 p-6 rounded-lg border-l-4 border-slate-500">
        <h2 className="text-2xl font-bold mb-4 text-slate-900">Professional Terminology Summary</h2>
        <p className="text-lg md:text-xl text-slate-800 leading-relaxed">Professional Rule: <strong>Technical</strong> is the correct spelling with &quot;h&quot; in the middle: tech-nic-al. &quot;Technical&quot; is an adjective formed from Greek &quot;technikos&quot; meaning &quot;relating to technique or skill.&quot; The incorrect spelling &quot;tecnical&quot; violates basic word formation rules and is never acceptable in any context. Always use &quot;technical&quot; when referring to specialized knowledge, skills, or professional matters.</p>
      </div>
    </div>
  )
} 