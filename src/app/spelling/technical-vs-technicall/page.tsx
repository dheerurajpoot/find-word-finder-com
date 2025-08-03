import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Technical vs Technicall - Correct Spelling & Word Formation | Word Finder',
  description: 'Learn the correct spelling: &quot;technical&quot; vs &quot;technicall&quot;. Understand word formation rules, avoid common errors, and master proper usage.',
}

export default function TechnicalVsTechnicallPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <div className="text-center mb-10">
        <h1 className="text-6xl font-black mb-4 bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 bg-clip-text text-transparent">
          Technical vs Technicall
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Word Formation Guide: Understanding Spelling Patterns
        </p>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-amber-100 via-orange-100 to-red-100 p-8 rounded-2xl mb-10 border border-amber-200">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Quick Answer</h2>
          <div className="inline-flex items-center bg-white px-6 py-3 rounded-full shadow-lg">
            <span className="text-2xl mr-3">🎯</span>
            <span className="text-2xl font-bold text-green-600">&quot;Technical&quot; is Correct</span>
            <span className="text-2xl ml-3">✅</span>
          </div>
          <p className="text-lg text-gray-700 mt-4">
            &quot;Technicall&quot; is always incorrect - remember the single &quot;l&quot; ending!
          </p>
        </div>
      </div>

      {/* Comparison Cards */}
      <div className="grid lg:grid-cols-2 gap-8 mb-12">
        <Card className="transform hover:scale-105 transition-transform duration-300 border-0 shadow-xl bg-gradient-to-br from-red-50 to-red-100">
          <CardContent className="p-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">✗</span>
              </div>
              <h3 className="text-3xl font-bold text-red-800 mb-4">Technicall</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-xl text-red-700 font-semibold">❌ INCORRECT</p>
              </div>
              <p className="text-lg text-red-700 leading-relaxed">
                This spelling is never acceptable in English. It&apos;s a common misspelling that should be avoided.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="transform hover:scale-105 transition-transform duration-300 border-0 shadow-xl bg-gradient-to-br from-green-50 to-green-100">
          <CardContent className="p-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">✓</span>
              </div>
              <h3 className="text-3xl font-bold text-green-800 mb-4">Technical</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-xl text-green-700 font-semibold">✅ CORRECT</p>
              </div>
              <p className="text-lg text-green-700 leading-relaxed">
                This is the proper spelling meaning &quot;relating to technique or technology.&quot;
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Word Formation Analysis */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Word Formation Analysis</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="bg-blue-50 border-blue-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-blue-900 mb-4">&quot;Technic&quot; (Root)</h3>
              <ul className="text-blue-800 space-y-2">
                <li>• From Greek &quot;technikos&quot;</li>
                <li>• Relating to skill</li>
                <li>• Professional knowledge</li>
                <li>• Expert technique</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-green-50 border-green-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-green-900 mb-4">&quot;al&quot; (Suffix)</h3>
              <ul className="text-green-800 space-y-2">
                <li>• Forms adjectives</li>
                <li>• Means &quot;relating to&quot;</li>
                <li>• Creates &quot;technical&quot;</li>
                <li>• Single &quot;l&quot; ending</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-purple-50 border-purple-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-purple-900 mb-4">&quot;ll&quot; (Error)</h3>
              <ul className="text-purple-800 space-y-2">
                <li>• Double &quot;l&quot; is incorrect</li>
                <li>• Not a valid suffix</li>
                <li>• Common misspelling</li>
                <li>• Should be avoided</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Usage Examples */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Professional Usage Examples</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-green-800 mb-4">✅ Correct Usage</h3>
            <div className="space-y-4">
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-lg text-green-800">&quot;The <strong>technical</strong> requirements are clear.&quot;</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-lg text-green-800">&quot;She has excellent <strong>technical</strong> skills.&quot;</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-lg text-green-800">&quot;This is a <strong>technical</strong> specification.&quot;</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-lg text-green-800">&quot;The <strong>technical</strong> team will assist you.&quot;</p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-red-800 mb-4">❌ Common Mistakes</h3>
            <div className="space-y-4">
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;The <strong>technicall</strong> requirements&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;technical&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;Excellent <strong>technicall</strong> skills&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;technical&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;A <strong>technicall</strong> specification&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;technical&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;The <strong>technicall</strong> team&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;technical&quot;</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Memory Tricks */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Memory Tricks & Spelling Tips</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="bg-yellow-50 border-yellow-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🔤</div>
              <h3 className="text-xl font-bold text-yellow-900 mb-2">Single L Rule</h3>
              <p className="text-yellow-800">&quot;Technical&quot; has one &quot;l&quot; like &quot;professional&quot;</p>
            </CardContent>
          </Card>
          <Card className="bg-blue-50 border-blue-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🧠</div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">Think Professional</h3>
              <p className="text-blue-800">Technical = Professional (both have single &quot;l&quot;)</p>
            </CardContent>
          </Card>
          <Card className="bg-green-50 border-green-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">✍️</div>
              <h3 className="text-xl font-bold text-green-900 mb-2">Break It Down</h3>
              <p className="text-green-800">Tech-nic-al (3 syllables, 1 &quot;l&quot;)</p>
            </CardContent>
          </Card>
          <Card className="bg-purple-50 border-purple-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🔍</div>
              <h3 className="text-xl font-bold text-purple-900 mb-2">Check Patterns</h3>
              <p className="text-purple-800">Most &quot;-ical&quot; words have single &quot;l&quot;</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Professional Contexts */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Professional Contexts & Usage</h2>
        <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-8 rounded-xl">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Common Professional Phrases</h3>
              <ul className="space-y-3 text-lg text-gray-700">
                <li>• <strong>Technical support</strong> - IT assistance</li>
                <li>• <strong>Technical skills</strong> - professional abilities</li>
                <li>• <strong>Technical documentation</strong> - detailed guides</li>
                <li>• <strong>Technical specifications</strong> - detailed requirements</li>
                <li>• <strong>Technical analysis</strong> - detailed examination</li>
                <li>• <strong>Technical expertise</strong> - specialized knowledge</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Grammatical Functions</h3>
              <ul className="space-y-3 text-lg text-gray-700">
                <li>• <strong>Adjective:</strong> &quot;Technical problem&quot;</li>
                <li>• <strong>Noun modifier:</strong> &quot;Technical team&quot;</li>
                <li>• <strong>Professional term:</strong> &quot;Technical field&quot;</li>
                <li>• <strong>Descriptive:</strong> &quot;Technical details&quot;</li>
                <li>• <strong>Qualifier:</strong> &quot;Technical requirements&quot;</li>
                <li>• <strong>Category:</strong> &quot;Technical writing&quot;</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <Card className="border-l-4 border-indigo-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-indigo-900 mb-3">Q: Why do people misspell &quot;technical&quot; as &quot;technicall&quot;?</h3>
              <p className="text-lg text-gray-700">A: The misspelling often occurs because people may confuse it with words that have double &quot;l&quot; endings, or they may not be familiar with the proper word formation rules.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-green-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-green-900 mb-3">Q: What&apos;s the difference between &quot;technical&quot; and &quot;technological&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Technical&quot; refers to technique, skill, or method, while &quot;technological&quot; specifically relates to technology and its applications.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-purple-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-purple-900 mb-3">Q: Can &quot;technical&quot; be used in formal business writing?</h3>
              <p className="text-lg text-gray-700">A: Yes, &quot;technical&quot; is perfectly acceptable and commonly used in formal business writing, professional documents, and academic contexts.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-orange-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-orange-900 mb-3">Q: What are some synonyms for &quot;technical&quot;?</h3>
              <p className="text-lg text-gray-700">A: Common synonyms include: specialized, professional, expert, skilled, proficient, advanced, complex, and sophisticated.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-red-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-red-900 mb-3">Q: How do you remember the correct spelling?</h3>
              <p className="text-lg text-gray-700">A: Remember that &quot;technical&quot; has a single &quot;l&quot; (like &quot;professional&quot;), and think of the word as tech-nic-al with the single &quot;l&quot; ending.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-blue-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-blue-900 mb-3">Q: Is &quot;technical&quot; always used in professional contexts?</h3>
              <p className="text-lg text-gray-700">A: While often used in professional contexts, &quot;technical&quot; can also be used in everyday conversation to describe anything related to technique or specialized knowledge.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-teal-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-teal-900 mb-3">Q: What&apos;s the etymology of &quot;technical&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Technical&quot; comes from the Greek &quot;technikos&quot; (relating to art or skill) + the Latin suffix &quot;-al&quot; to form an adjective meaning &quot;relating to technique.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-pink-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-pink-900 mb-3">Q: Can &quot;technical&quot; be used to describe non-professional skills?</h3>
              <p className="text-lg text-gray-700">A: Yes, &quot;technical&quot; can describe any specialized skill or method, whether professional (technical writing) or personal (technical cooking skills).</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-cyan-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-cyan-900 mb-3">Q: What are common collocations with &quot;technical&quot;?</h3>
              <p className="text-lg text-gray-700">A: Common collocations include: technical support, technical skills, technical documentation, technical specifications, technical analysis, and technical expertise.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-lime-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-lime-900 mb-3">Q: How do you teach children the correct spelling?</h3>
              <p className="text-lg text-gray-700">A: Use visual aids showing &quot;technical&quot; has a single &quot;l&quot; (like &quot;professional&quot;), and emphasize the pronunciation: tech-nic-al with a single &quot;l&quot; sound.</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Final Summary */}
      <div className="bg-gradient-to-r from-amber-600 to-orange-600 text-white p-8 rounded-2xl text-center">
        <h2 className="text-3xl font-bold mb-4">Key Takeaway</h2>
        <p className="text-xl leading-relaxed mb-6">
          Always remember: <strong>&quot;Technical&quot;</strong> has a single &quot;l&quot; and means &quot;relating to technique or technology.&quot; 
          <br />
          <strong>&quot;Technicall&quot;</strong> is never correct in any context.
        </p>
        <div className="bg-black bg-opacity-20 p-4 rounded-lg inline-block">
          <p className="text-lg font-semibold">💡 Pro Tip: Think &quot;Technical = Professional&quot; (both have single &quot;l&quot;)</p>
        </div>
      </div>
    </div>
  )
} 