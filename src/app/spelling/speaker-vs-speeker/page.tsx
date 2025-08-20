import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Speaker vs Speeker - Spelling Guide & Examples | Word Finder',
  description: 'Master the difference between &quot;speaker&quot; and &quot;speeker&quot; with our comprehensive spelling guide. Learn proper usage, common errors, and memory tricks.',
}

export default function SpeakerVsSpeekerPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <div className="text-center mb-10">
        <h1 className="text-6xl font-black mb-4 bg-gradient-to-r from-purple-600 via-pink-600 to-rose-600 bg-clip-text text-transparent">
          Speaker vs Speeker
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          The Ultimate Spelling Guide: Understanding the Difference Between Correct and Incorrect Usage
        </p>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-purple-100 via-pink-100 to-rose-100 p-8 rounded-2xl mb-10 border border-purple-200">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Quick Answer</h2>
          <div className="inline-flex items-center bg-white px-6 py-3 rounded-full shadow-lg">
            <span className="text-2xl mr-3">🔊</span>
            <span className="text-2xl font-bold text-purple-600">&quot;Speaker&quot; is Correct</span>
            <span className="text-2xl ml-3">✅</span>
          </div>
          <p className="text-lg text-gray-700 mt-4">
            &quot;Speeker&quot; is always incorrect - remember the &quot;ea&quot; sound in &quot;speaker&quot;!
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
              <h3 className="text-3xl font-bold text-red-800 mb-4">Speeker</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-xl text-red-700 font-semibold">❌ INCORRECT</p>
              </div>
              <p className="text-lg text-red-700 leading-relaxed">
                This spelling is never acceptable in English. It&apos;s a common mistake that should be avoided.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="transform hover:scale-105 transition-transform duration-300 border-0 shadow-xl bg-gradient-to-br from-purple-50 to-purple-100">
          <CardContent className="p-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">✓</span>
              </div>
              <h3 className="text-3xl font-bold text-purple-800 mb-4">Speaker</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-xl text-purple-700 font-semibold">✅ CORRECT</p>
              </div>
              <p className="text-lg text-purple-700 leading-relaxed">
                This is the proper spelling meaning &quot;a person who speaks or an audio device that produces sound.&quot;
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Detailed Explanation */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Understanding the Difference</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="bg-purple-50 border-purple-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-purple-900 mb-4">&quot;Speak&quot; (Root)</h3>
              <ul className="text-purple-800 space-y-2">
                <li>• Means &quot;to talk&quot;</li>
                <li>• Old English origin</li>
                <li>• Related to communication</li>
                <li>• Used in many contexts</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-pink-50 border-pink-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-pink-900 mb-4">&quot;Ea&quot; (Vowel Team)</h3>
              <ul className="text-pink-800 space-y-2">
                <li>• Creates &quot;ee&quot; sound</li>
                <li>• Common in English</li>
                <li>• Part of root word</li>
                <li>• Must be preserved</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-rose-50 border-rose-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-rose-900 mb-4">&quot;Er&quot; (Suffix)</h3>
              <ul className="text-rose-800 space-y-2">
                <li>• Agent noun ending</li>
                <li>• Means &quot;one who does&quot;</li>
                <li>• Standard English suffix</li>
                <li>• Added to base form</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Usage Examples */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Correct Usage Examples</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-purple-50 border-purple-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-purple-900 mb-4">✅ Correct: &quot;Speaker&quot;</h3>
              <div className="space-y-3">
                <p className="text-purple-800"><strong>•</strong> &quot;The keynote speaker was excellent.&quot;</p>
                <p className="text-purple-800"><strong>•</strong> &quot;Connect the speaker to your computer.&quot;</p>
                <p className="text-purple-800"><strong>•</strong> &quot;She is a native speaker of French.&quot;</p>
                <p className="text-purple-800"><strong>•</strong> &quot;The speaker addressed the audience.&quot;</p>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-red-50 border-red-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-red-900 mb-4">❌ Incorrect: &quot;Speeker&quot;</h3>
              <div className="space-y-3">
                <p className="text-red-800"><strong>•</strong> &quot;The keynote speeker was excellent&quot; ❌</p>
                <p className="text-red-800"><strong>•</strong> &quot;Connect the speeker to your computer&quot; ❌</p>
                <p className="text-red-800"><strong>•</strong> &quot;She is a native speeker of French&quot; ❌</p>
                <p className="text-red-800"><strong>•</strong> &quot;The speeker addressed the audience&quot; ❌</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Memory Tricks */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Memory Tricks & Tips</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="bg-yellow-50 border-yellow-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🔤</div>
              <h3 className="text-xl font-bold text-yellow-900 mb-2">EA Sound Rule</h3>
              <p className="text-yellow-800">&quot;Speak&quot; has &quot;ea&quot; like &quot;teach&quot; and &quot;reach&quot;</p>
            </CardContent>
          </Card>
          <Card className="bg-purple-50 border-purple-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🧠</div>
              <h3 className="text-xl font-bold text-purple-900 mb-2">Think Person</h3>
              <p className="text-purple-800">&quot;Speaker&quot; = one who speaks</p>
            </CardContent>
          </Card>
          <Card className="bg-green-50 border-green-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">✍️</div>
              <h3 className="text-xl font-bold text-green-900 mb-2">Write It Out</h3>
              <p className="text-green-800">Practice writing &quot;speaker&quot; to build muscle memory</p>
            </CardContent>
          </Card>
          <Card className="bg-pink-50 border-pink-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🔍</div>
              <h3 className="text-xl font-bold text-pink-900 mb-2">Proofread</h3>
              <p className="text-pink-800">Always double-check your spelling before submitting</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <Card className="border-l-4 border-purple-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-purple-900 mb-3">Q: Why do people misspell &quot;speaker&quot; as &quot;speeker&quot;?</h3>
              <p className="text-lg text-gray-700">A: This common error often occurs due to phonetic confusion. People might hear the &quot;ee&quot; sound and think it should be spelled with &quot;ee&quot;, leading to the incorrect &quot;speeker.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-green-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-green-900 mb-3">Q: Is &quot;speaker&quot; used in formal writing?</h3>
              <p className="text-lg text-gray-700">A: Yes! &quot;Speaker&quot; is perfectly acceptable in formal writing, academic papers, and professional communication. It&apos;s a standard English word.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-pink-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-pink-900 mb-3">Q: What&apos;s the etymology of &quot;speaker&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Speaker&quot; comes from Old English &quot;specere&quot; meaning &quot;one who speaks.&quot; The &quot;ea&quot; spelling developed to represent the long vowel sound, and this pattern has been preserved in modern English.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-orange-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-orange-900 mb-3">Q: Are there regional variations in spelling?</h3>
              <p className="text-lg text-gray-700">A: No, &quot;speaker&quot; is spelled the same way across all English-speaking regions. The spelling &quot;speeker&quot; is never correct in any dialect or region.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-red-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-red-900 mb-3">Q: How can I remember the correct spelling?</h3>
              <p className="text-lg text-gray-700">A: Think of related words like &quot;teach&quot;, &quot;reach&quot;, and &quot;speech&quot; - they all use the &quot;ea&quot; spelling for the &quot;ee&quot; sound. This pattern helps reinforce the correct spelling.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-teal-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-teal-900 mb-3">Q: What are some synonyms for &quot;speaker&quot;?</h3>
              <p className="text-lg text-gray-700">A: Common synonyms include: presenter, lecturer, orator, communicator, spokesperson, narrator, and announcer.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-rose-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-rose-900 mb-3">Q: Can &quot;speaker&quot; refer to objects?</h3>
              <p className="text-lg text-gray-700">A: Yes! &quot;Speaker&quot; can refer to both people (one who speaks) and audio devices (like computer speakers, Bluetooth speakers, etc.).</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-indigo-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-indigo-900 mb-3">Q: What&apos;s the difference between &quot;speaker&quot; and &quot;talker&quot;?</h3>
              <p className="text-lg text-gray-700">A: While both refer to someone who communicates verbally, &quot;speaker&quot; often implies more formal or public communication, while &quot;talker&quot; is more casual and conversational.</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Final Summary */}
      <div className="bg-gradient-to-r from-purple-600 to-rose-600 text-white p-8 rounded-2xl text-center">
        <h2 className="text-3xl font-bold mb-4">Key Takeaway</h2>
        <p className="text-xl leading-relaxed mb-6">
          Always remember: <strong>&quot;Speaker&quot;</strong> has &quot;ea&quot; for the &quot;ee&quot; sound. 
          <br />
          <strong>&quot;Speeker&quot;</strong> is never correct in any context.
        </p>
        <div className="bg-black bg-opacity-20 p-4 rounded-lg inline-block">
          <p className="text-lg font-semibold">💡 Pro Tip: Think &quot;SPEAK + ER = SPEAKER&quot;</p>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center mt-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Ready to Master More Spelling?</h2>
        <p className="text-lg text-gray-600 mb-8">
          Explore our comprehensive spelling guides and improve your writing skills today!
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a href="/spelling" className="bg-gradient-to-r from-purple-500 to-rose-500 text-white px-8 py-3 rounded-full font-semibold hover:from-purple-600 hover:to-rose-600 transition-all duration-300 transform hover:scale-105">
            Browse All Spelling Guides
          </a>
          <a href="/word-finders" className="bg-gray-800 text-white px-8 py-3 rounded-full font-semibold hover:bg-gray-900 transition-all duration-300 transform hover:scale-105">
            Explore Word Tools
          </a>
        </div>
      </div>
    </div>
  )
}
