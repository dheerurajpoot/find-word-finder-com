import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Recipe vs Receipe - Spelling Guide & Examples | Word Finder',
  description: 'Master the difference between &quot;recipe&quot; and &quot;receipe&quot; with our comprehensive spelling guide. Learn proper usage, common errors, and memory tricks.',
}

export default function RecipeVsReceipePage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      {/* Hero Section */}
      <div className="text-center mb-10">
        <h1 className="text-6xl font-black mb-6 bg-gradient-to-r from-sky-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent">
          Recipe vs Receipe
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Don&apos;t spoil your cooking with bad spelling! Learn why the correct form needs that &quot;c&quot; to be complete.
        </p>
      </div>

      {/* Quick Answer */}
      <div className="bg-gradient-to-br from-sky-50 to-blue-50 border-l-4 border-sky-500 p-6 rounded-r-lg mb-8">
        <h2 className="text-2xl font-bold text-sky-800 mb-3">🎯 Quick Answer</h2>
        <p className="text-lg text-sky-700">
          <strong>&quot;Recipe&quot;</strong> is the correct spelling. &quot;Receipe&quot; is a common misspelling that should be avoided.
        </p>
      </div>

      {/* Comparison Cards */}
      <div className="grid md:grid-cols-2 gap-8 mb-10">
        <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
          <CardContent className="p-6 bg-gradient-to-br from-red-50 to-pink-50 border-l-4 border-red-500">
            <h3 className="text-xl font-bold text-red-700 mb-3">❌ Incorrect: Receipe</h3>
            <p className="text-red-600">This spelling is wrong and will be marked as an error in formal writing.</p>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
          <CardContent className="p-6 bg-gradient-to-br from-sky-50 to-blue-50 border-l-4 border-sky-500">
            <h3 className="text-xl font-bold text-sky-700 mb-3">✅ Correct: Recipe</h3>
            <p className="text-sky-600">This is the proper spelling that means &quot;instructions for preparing food dishes.&quot;</p>
          </CardContent>
        </Card>
      </div>

      {/* Detailed Explanation */}
      <div className="grid md:grid-cols-3 gap-6 mb-10">
        <Card className="border-0 shadow-lg">
          <CardContent className="p-6 bg-gradient-to-br from-sky-100 to-blue-100">
            <h3 className="text-lg font-bold text-sky-800 mb-3">📚 Correct Word</h3>
            <p className="text-sky-700">
              <strong>Recipe</strong> is a noun that refers to a set of instructions for preparing a particular dish or food item.
            </p>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-lg">
          <CardContent className="p-6 bg-gradient-to-br from-red-100 to-pink-100">
            <h3 className="text-lg font-bold text-red-800 mb-3">🚫 Common Error</h3>
            <p className="text-red-700">
              <strong>Receipe</strong> is a misspelling that often occurs due to phonetic confusion or typing errors.
            </p>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-lg">
          <CardContent className="p-6 bg-gradient-to-br from-sky-100 to-blue-100">
            <h3 className="text-lg font-bold text-sky-800 mb-3">🔍 Etymology</h3>
            <p className="text-sky-700">
              From Latin <em>recipere</em>, meaning &quot;to take.&quot; The &quot;c&quot; before &quot;ipe&quot; is essential for the correct spelling.
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Usage Examples */}
      <div className="grid md:grid-cols-2 gap-8 mb-10">
        <div>
          <h3 className="text-2xl font-bold text-sky-800 mb-4">✅ Correct Usage</h3>
          <div className="space-y-3">
            <div className="bg-gradient-to-r from-sky-50 to-blue-50 border-l-4 border-sky-500 p-4 rounded-r-lg">
              <p className="text-sky-700">This <strong>recipe</strong> for chocolate cake is delicious.</p>
            </div>
            <div className="bg-gradient-to-r from-sky-50 to-blue-50 border-l-4 border-sky-500 p-4 rounded-r-lg">
              <p className="text-sky-700">My grandmother&apos;s <strong>recipe</strong> has been passed down for generations.</p>
            </div>
            <div className="bg-gradient-to-r from-sky-50 to-blue-50 border-l-4 border-sky-500 p-4 rounded-r-lg">
              <p className="text-sky-700">Follow the <strong>recipe</strong> carefully for best results.</p>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-red-800 mb-4">❌ Common Mistakes</h3>
          <div className="space-y-3">
            <div className="bg-gradient-to-r from-red-50 to-pink-50 border-l-4 border-red-500 p-4 rounded-r-lg">
              <p className="text-red-700">This <strong>receipe</strong> for chocolate cake is delicious. <span className="text-red-500">(Incorrect)</span></p>
            </div>
            <div className="bg-gradient-to-r from-red-50 to-pink-50 border-l-4 border-red-500 p-4 rounded-r-lg">
              <p className="text-red-700">My grandmother&apos;s <strong>receipe</strong> has been passed down for generations. <span className="text-red-500">(Incorrect)</span></p>
            </div>
            <div className="bg-gradient-to-r from-red-50 to-pink-50 border-l-4 border-red-500 p-4 rounded-r-lg">
              <p className="text-red-700">Follow the <strong>receipe</strong> carefully for best results. <span className="text-red-500">(Incorrect)</span></p>
            </div>
          </div>
        </div>
      </div>

      {/* Memory Tricks & Tips */}
      <div className="mb-10">
        <h2 className="text-3xl font-bold text-sky-800 mb-6 text-center">🧠 Memory Tricks & Tips</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="border-0 shadow-lg">
            <CardContent className="p-6 bg-gradient-to-br from-sky-100 to-blue-100">
              <h3 className="text-lg font-bold text-sky-800 mb-3">🎯 Think &quot;Receive&quot;</h3>
              <p className="text-sky-700">Remember that &quot;recipe&quot; comes from &quot;receive&quot; - both have the &quot;ce&quot; pattern!</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-6 bg-gradient-to-br from-sky-100 to-blue-100">
              <h3 className="text-lg font-bold text-sky-800 mb-3">🔤 &quot;C&quot; Before &quot;I&quot;</h3>
              <p className="text-sky-700">The &quot;c&quot; in &quot;recipe&quot; comes before the &quot;i&quot; - think &quot;re&quot; + &quot;cipe&quot;!</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-6 bg-gradient-to-br from-sky-100 to-blue-100">
              <h3 className="text-lg font-bold text-sky-800 mb-3">📝 Break It Down</h3>
              <p className="text-sky-700">Think: &quot;Re&quot; + &quot;cipe&quot; = &quot;recipe&quot; - the &quot;c&quot; is crucial!</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-6 bg-gradient-to-br from-sky-100 to-blue-100">
              <h3 className="text-lg font-bold text-sky-800 mb-3">🎨 Visual Association</h3>
              <p className="text-sky-700">Picture the &quot;c&quot; as a cooking pot - it&apos;s essential for the &quot;recipe&quot;!</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Advanced Usage Patterns */}
      <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-8 rounded-2xl mb-10">
        <h2 className="text-3xl font-bold text-sky-800 mb-6 text-center">🚀 Advanced Usage Patterns</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-bold text-sky-700 mb-4">Common Phrases</h3>
            <div className="space-y-2">
              <p className="text-sky-600">• Family <strong>recipe</strong></p>
              <p className="text-sky-600">• Secret <strong>recipe</strong></p>
              <p className="text-sky-600">• Traditional <strong>recipe</strong></p>
              <p className="text-sky-600">• Favorite <strong>recipe</strong></p>
              <p className="text-sky-600">• Cooking <strong>recipe</strong></p>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold text-sky-700 mb-4">Grammatical Functions</h3>
            <div className="space-y-2">
              <p className="text-sky-600">• <strong>Noun:</strong> The recipe is delicious</p>
              <p className="text-sky-600">• <strong>Subject:</strong> This recipe requires skill</p>
              <p className="text-sky-600">• <strong>Object:</strong> I love this recipe</p>
              <p className="text-sky-600">• <strong>Possessive:</strong> The recipe&apos;s origin</p>
              <p className="text-sky-600">• <strong>Countable:</strong> One recipe</p>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mb-10">
        <h2 className="text-3xl font-bold text-sky-800 mb-6 text-center">❓ Frequently Asked Questions</h2>
        <div className="space-y-4">
          <Card className="border-0 shadow-lg">
            <CardContent className="p-6 border-l-4 border-sky-500">
              <h3 className="text-lg font-bold text-sky-800 mb-2">Why do people misspell &quot;recipe&quot; as &quot;receipe&quot;?</h3>
              <p className="text-gray-700">This often happens due to phonetic confusion. The &quot;ce&quot; sound can be heard as &quot;ce,&quot; leading to the misspelling.</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-6 border-l-4 border-sky-500">
              <h3 className="text-lg font-bold text-sky-800 mb-2">Is &quot;receipe&quot; ever acceptable in any context?</h3>
              <p className="text-gray-700">No, &quot;receipe&quot; is never correct in formal or informal writing. It should always be spelled as &quot;recipe.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-6 border-l-4 border-sky-500">
              <h3 className="text-lg font-bold text-sky-800 mb-2">What&apos;s the difference between &quot;recipe&quot; and &quot;receipt&quot;?</h3>
              <p className="text-gray-700">&quot;Recipe&quot; refers to cooking instructions, while &quot;receipt&quot; is a proof of purchase or payment.</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-6 border-l-4 border-sky-500">
              <h3 className="text-lg font-bold text-sky-800 mb-2">Can &quot;recipe&quot; be used as a verb?</h3>
              <p className="text-gray-700">No, &quot;recipe&quot; is only a noun. The verb form would be &quot;to cook&quot; or &quot;to prepare.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-6 border-l-4 border-sky-500">
              <h3 className="text-lg font-bold text-sky-800 mb-2">How do I remember the correct spelling?</h3>
              <p className="text-gray-700">Think of &quot;receive&quot; - both words have the same &quot;ce&quot; pattern, and &quot;recipe&quot; comes from &quot;receive.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-6 border-l-4 border-sky-500">
              <h3 className="text-lg font-bold text-sky-800 mb-2">Is &quot;recipe&quot; related to &quot;recipient&quot;?</h3>
              <p className="text-gray-700">While they sound similar, they have different origins. &quot;Recipe&quot; comes from Latin &quot;recipere,&quot; while &quot;recipient&quot; comes from &quot;recipiens.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-6 border-l-4 border-sky-500">
              <h3 className="text-lg font-bold text-sky-800 mb-2">What&apos;s the plural form of &quot;recipe&quot;?</h3>
              <p className="text-gray-700">The plural form is &quot;recipes.&quot; For example: &quot;These recipes are my favorites.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-6 border-l-4 border-sky-500">
              <h3 className="text-lg font-bold text-sky-800 mb-2">Can &quot;recipe&quot; be used for things other than food?</h3>
              <p className="text-gray-700">Yes, &quot;recipe&quot; can also refer to a method or procedure for achieving something, like &quot;a recipe for success.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-6 border-l-4 border-sky-500">
              <h3 className="text-lg font-bold text-sky-800 mb-2">What&apos;s the origin of the word &quot;recipe&quot;?</h3>
              <p className="text-gray-700">It comes from Latin &quot;recipere,&quot; meaning &quot;to take&quot; or &quot;to receive,&quot; originally referring to medical prescriptions.</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-6 border-l-4 border-sky-500">
              <h3 className="text-lg font-bold text-sky-800 mb-2">How common is the misspelling &quot;receipe&quot;?</h3>
              <p className="text-gray-700">It&apos;s a moderately common misspelling, especially in informal writing and when people are typing quickly without checking.</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Final Summary */}
      <div className="bg-gradient-to-r from-sky-600 to-blue-600 text-white p-8 rounded-2xl mb-10 text-center">
        <h2 className="text-3xl font-bold mb-4">🎯 Key Takeaway</h2>
        <p className="text-xl mb-4">
          Always remember: <strong>&quot;Recipe&quot;</strong> has a &quot;c&quot; before &quot;i&quot; - just like &quot;receive&quot;!
        </p>
        <p className="text-lg opacity-90">
          <strong>Pro Tip:</strong> The &quot;ce&quot; in &quot;recipe&quot; follows the same pattern as &quot;receive,&quot; making it easier to remember the correct spelling.
        </p>
      </div>

      {/* Three Column Layout */}
      <div className="grid md:grid-cols-3 gap-8">
        {/* Featured Misspellings */}
        <div className="bg-gradient-to-br from-sky-50 to-blue-50 p-6 rounded-2xl">
          <h3 className="text-xl font-bold text-sky-800 mb-4 text-center">🔤 Featured Misspellings</h3>
          <div className="space-y-2">
            <p><a href="/spelling/recipe-vs-resipe" className="text-blue-700 hover:text-blue-900 underline">Recipe vs Resipe</a></p>
            <p><a href="/spelling/recipe-vs-recipie" className="text-blue-700 hover:text-blue-900 underline">Recipe vs Recipie</a></p>
            <p><a href="/spelling/recipe-vs-recepie" className="text-blue-700 hover:text-blue-900 underline">Recipe vs Recepie</a></p>
            <p><a href="/spelling/recipes-vs-recipies" className="text-blue-700 hover:text-blue-900 underline">Recipes vs Recipies</a></p>
            <p><a href="/spelling/recipient-vs-recepient" className="text-blue-700 hover:text-blue-900 underline">Recipient vs Recepient</a></p>
          </div>
        </div>

        {/* Related Misspellings */}
        <div className="bg-gradient-to-br from-sky-50 to-blue-50 p-6 rounded-2xl">
          <h3 className="text-xl font-bold text-sky-800 mb-4 text-center">🔗 Related Misspellings</h3>
          <div className="space-y-2">
            <p><a href="/spelling/receipt-vs-reciept" className="text-blue-700 hover:text-blue-900 underline">Receipt vs Reciept</a></p>
            <p><a href="/spelling/receive-vs-recieve" className="text-blue-700 hover:text-blue-900 underline">Receive vs Recieve</a></p>
            <p><a href="/spelling/receiving-vs-recieving" className="text-blue-700 hover:text-blue-900 underline">Receiving vs Recieving</a></p>
            <p><a href="/spelling/reception-vs-reseption" className="text-blue-700 hover:text-blue-900 underline">Reception vs Reseption</a></p>
            <p><a href="/spelling/receiver-vs-reciever" className="text-blue-700 hover:text-blue-900 underline">Receiver vs Reciever</a></p>
          </div>
        </div>

        {/* Learned Grammar */}
        <div className="bg-gradient-to-br from-sky-50 to-blue-50 p-6 rounded-2xl">
          <h3 className="text-xl font-bold text-sky-800 mb-4 text-center">📚 Learned Grammar</h3>
          <div className="space-y-2">
            <p><a href="/grammar/nouns" className="text-blue-700 hover:text-blue-900 underline">Nouns</a></p>
            <p><a href="/grammar/spelling-rules" className="text-blue-700 hover:text-blue-900 underline">Spelling Rules</a></p>
            <p><a href="/grammar/latin-origins" className="text-blue-700 hover:text-blue-900 underline">Latin Origins</a></p>
            <p><a href="/grammar/word-formation" className="text-blue-700 hover:text-blue-900 underline">Word Formation</a></p>
            <p><a href="/grammar/etymology" className="text-blue-700 hover:text-blue-900 underline">Etymology</a></p>
          </div>
        </div>
      </div>
    </div>
  )
}
