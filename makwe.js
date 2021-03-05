async function getNumberOfOperations(nr_invites, depth){
    let numerator = Math.pow(nr_invites, depth) - 1
    let denominator = nr_invites - 1
    let op = nr_invites * numerator
    op = numerator / denominator
    return op
  }
  
  async function socialNetworkGrowth(nr_invites, depth){
    //compute the formula
    let opNumber = await getNumberOfOperations(nr_invites, depth)
  
   console.log("#1 created")
    let counter = 2
    let starter = 1
    while(counter < opNumber +1){
      for(let i = 0; i < nr_invites ; i ++){
        console.log(`#${counter} created which was invited by ${starter}`)
        counter ++
      }
      starter++
    }
  }
  
  socialNetworkGrowth(5, 10)