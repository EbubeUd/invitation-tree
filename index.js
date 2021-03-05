function computeInvitation(max_inv, depth)
{
    var loop_count = 0;
    var current_user = 0.9;
    for(i = 0; i < depth; i++) loop_count += Math.pow(max_inv, i);
    var incrementer = 1 / max_inv;

    console.log("#1 is created", "\n#1 is inviting");
    for(i = 2;  i < loop_count+1; i++)
    {
        current_user += incrementer;
        console.log(`#${i} is created invited by #${~~current_user}`);
    }
}

computeInvitation(2,3);